import {
	Vector2,
	Vector3,
	Vector4,
	Quaternion,
	Matrix4,
	Spherical,
	Box3,
	Sphere,
	Raycaster,
    OrthographicCamera,
    WebGLRenderer
} from 'three';
import CameraControls from 'camera-controls';


const subsetOfTHREE = {
	Vector2   : Vector2,
	Vector3   : Vector3,
	Vector4   : Vector4,
	Quaternion: Quaternion,
	Matrix4   : Matrix4,
	Spherical : Spherical,
	Box3      : Box3,
	Sphere    : Sphere,
	Raycaster : Raycaster,
};


export default function createCamera(container:HTMLElement, renderer:WebGLRenderer) {
    CameraControls.install( { THREE: subsetOfTHREE } );
    const width = 5;
    const height = 5;
    const near = 0;
    const far = 40;
    const aspect = container.clientWidth / container.clientHeight
    const camera = new OrthographicCamera(width * aspect / - 2, width * aspect / 2, height / 2, height / - 2, near, far)
    camera.zoom = 0.3
    camera.position.set(-10, 8, 5);
    camera.updateProjectionMatrix();
  
    const controls = new CameraControls(camera, renderer.domElement);
    controls.setTarget(0, 5, 0);
    controls.azimuthRotateSpeed = 2;
    controls.polarRotateSpeed = 2;
    controls.dollyToCursor = false; // Disable zooming
    controls.mouseButtons.wheel = CameraControls.ACTION.NONE; // Disable zoom with the mouse wheel
    controls.mouseButtons.left = CameraControls.ACTION.NONE; // Disable panning
    controls.mouseButtons.right = CameraControls.ACTION.NONE; // Disable rotation  
  
    return { camera, controls };
  }