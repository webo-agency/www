import { PCFSoftShadowMap ,WebGLRenderer} from 'three';

export default function createRenderer(container:HTMLElement):WebGLRenderer {
    const renderer = new WebGLRenderer({ antialias: true,alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.localClippingEnabled = true;
    container.appendChild(renderer.domElement);
    return renderer;
  }