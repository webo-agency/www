<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'
import { useMouse, useWindowScroll, useEventListener } from '@vueuse/core'

const canvas = ref(null)
let animationId = null
let renderer = null
let cleanupFn = null

const { x: mouseX, y: mouseY } = useMouse({ type: 'client' })
const { y: scrollY } = useWindowScroll()

const vertexShader = `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec3 uMouseWorld;
  varying float vElevation;
  varying float vDepth;
  varying float vFocus;

  vec3 m289(vec3 x){return x-floor(x*(1./289.))*289.;}
  vec4 m289v4(vec4 x){return x-floor(x*(1./289.))*289.;}
  vec4 perm(vec4 x){return m289v4(((x*34.)+10.)*x);}
  vec4 tiSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

  float snoise(vec3 v){
    const vec2 C=vec2(1./6.,1./3.);
    const vec4 D=vec4(0.,.5,1.,2.);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=m289(i);
    vec4 p=perm(perm(perm(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
    float n_=0.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.+1.;
    vec4 s1=floor(b1)*2.+1.;
    vec4 sh=-step(h,vec4(0.));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=tiSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
    m=m*m;
    return 105.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main(){
    vec3 pos=position;
    // Two smooth, low-frequency octaves for gentle rolling waves
    float elev = 0.;
    elev += snoise(vec3(pos.x * 0.02, pos.z * 0.015, uTime * 0.08)) * 5.0;
    elev += snoise(vec3(pos.x * 0.04, pos.z * 0.03,  uTime * 0.12)) * 2.0;
    
    // Add smooth horizontal sway to the dots
    float swayX = snoise(vec3(pos.x * 0.01, pos.z * 0.03, uTime * 0.05)) * 5.0;
    
    pos.y += elev;
    pos.x += swayX;

    // Mouse repel effect (spread on XZ axis only)
    float distToMouse = distance(pos.xz, uMouseWorld.xz);
    float repelRadius = 30.0; // slightly wider area
    if (distToMouse < repelRadius) {
       float f = 1.0 - smoothstep(0.0, repelRadius, distToMouse);
       f = pow(f, 2.0); // Make the curve stronger near the center
       
       vec2 dir = normalize(pos.xz - uMouseWorld.xz + vec2(0.0001));
       float pushSide = f * 5.0;

       pos.xz += dir * pushSide;
    }

    vElevation = elev;
    vec4 mvPos = modelViewMatrix * vec4(pos, 1.);
    vDepth = -mvPos.z;

    // Single focal calculation shared with fragment shader
    float focalDist = 90.0;
    float focalRange = 140.0;
    float defocus = abs(vDepth - focalDist);
    vFocus = 1.0 - smoothstep(0.0, focalRange, defocus);
    vFocus = pow(vFocus, 3.0);

    // Blur grows dots out of focus, shrinks in focus (sharp small dots)
    float blurSz = pow(defocus, 1.4) * 0.03;
    float ptSize = (0.9 + blurSz) * uPixelRatio * (180. / max(vDepth, 1.));
    ptSize = clamp(ptSize, 0.3, 32.0);
    gl_PointSize = ptSize;
    gl_Position = projectionMatrix * mvPos;
  }
`

const fragmentShader = `
  precision highp float;
  uniform vec3 uColor;
  uniform float uAppearProgress;
  varying float vElevation;
  varying float vDepth;
  varying float vFocus;

  void main(){
    float d = distance(gl_PointCoord, vec2(0.5));
    if(d > 0.5) discard;

    float focusSharpness = vFocus;

    float sharpEdge = smoothstep(0.5, 0.1, d);
    float softDisc  = smoothstep(0.5, 0.0, d) * 0.1;
    float shape = mix(softDisc, sharpEdge, focusSharpness);

    float brightnessFade = mix(0.008, 1.0, focusSharpness);
    
    // Front-to-back fade in animation based on depth from camera
    float appearAlpha = smoothstep(vDepth * 0.01, vDepth * 0.01 + 0.5, uAppearProgress * 3.5);

    float alpha = shape * brightnessFade * appearAlpha;

    // Single color, dimmed out of focus
    vec3 col = mix(uColor * 0.15, uColor, focusSharpness);

    gl_FragColor = vec4(col, alpha);
  }
`

onMounted(async () => {
  await nextTick()
  if (!canvas.value) return

  const container = canvas.value.parentElement
  let width = container.clientWidth
  let height = container.clientHeight

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(42, width / height, 0.5, 800)
  const baseCameraPos = new THREE.Vector3(-18, 25, 90)
  const lookAtTarget = new THREE.Vector3(10, -8, -60)

  camera.position.copy(baseCameraPos)
  camera.lookAt(lookAtTarget)
  camera.rotation.z = 0.32 

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: false
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)

  const gW = 250, gH = 250, spacing = 0.8
  const count = gW * gH
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < gH; i++) {
    for (let j = 0; j < gW; j++) {
      const idx = (i * gW + j) * 3
      positions[idx]     = (j - gW / 2) * spacing
      positions[idx + 1] = 8
      positions[idx + 2] = (i - gH / 2) * spacing
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uColor: { value: new THREE.Color('#0A948F') },
      uMouseWorld: { value: new THREE.Vector3(-9999.0, -9999.0, -9999.0) },
      uAppearProgress: { value: 0.0 }
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  const points = new THREE.Points(geometry, material)
  scene.add(points)

  const startTime = performance.now() / 1000

  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2(-9999, -9999)
  const hitPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -8)
  const targetMouseWorld = new THREE.Vector3(-9999, -9999, -9999)
  const currentMouseWorld = new THREE.Vector3(-9999, -9999, -9999)

  function animate() {
    animationId = requestAnimationFrame(animate)
    const dt = performance.now() / 1000 - startTime
    material.uniforms.uTime.value = dt
    material.uniforms.uAppearProgress.value = Math.min(dt * 0.4, 1.0) // 2.5s duration to reach 1.0

    if (canvas.value) {

      const rect = canvas.value.getBoundingClientRect()
      mouse.x = ((mouseX.value - rect.left) / rect.width) * 2 - 1
      mouse.y = -((mouseY.value - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      raycaster.ray.intersectPlane(hitPlane, targetMouseWorld)
    }

    if (targetMouseWorld.x !== -9999) {
      if (currentMouseWorld.x === -9999) {
        currentMouseWorld.copy(targetMouseWorld)
      } else {
        currentMouseWorld.lerp(targetMouseWorld, 0.08)
      }
      material.uniforms.uMouseWorld.value.copy(currentMouseWorld)
    }

    const targetY = baseCameraPos.y - scrollY.value * 0.025
    camera.position.y += (targetY - camera.position.y) * 0.2
    camera.lookAt(lookAtTarget)
    camera.rotation.z = 0.32

    renderer.render(scene, camera)
  }

  animate()

  function onResize() {
    if (!canvas.value) return
    width = container.clientWidth
    height = container.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  useEventListener(window, 'resize', onResize)

  cleanupFn = () => {
    if (animationId) cancelAnimationFrame(animationId)
    geometry.dispose()
    material.dispose()
    renderer?.dispose()
    renderer = null
  }
})

onBeforeUnmount(() => {
  cleanupFn?.()
})
</script>