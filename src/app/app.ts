import { ArcRotateCamera, DirectionalLight, Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, ShadowGenerator, StandardMaterial, Vector3 } from 'babylonjs';

export default function setup() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const engine = new Engine(canvas);
  window.addEventListener('resize', () => {
    engine.resize();
  });

  const scene = new Scene(engine);

  // const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  // camera.setTarget(Vector3.Zero());
  // camera.attachControl(canvas, true);

  const camera = new ArcRotateCamera('camera', 0, 0.9, 10, Vector3.Zero(), scene);
	camera.lowerBetaLimit = 0.1;
	camera.upperBetaLimit = (Math.PI / 2) * 0.9;
	camera.lowerRadiusLimit = 5;
	camera.upperRadiusLimit = 50;
	camera.attachControl(canvas, true);

  const ground = MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);
  // const groundMaterial = new StandardMaterial('groundMaterial', scene);
  // ground.material = groundMaterial;
  ground.receiveShadows = true;

  const box = MeshBuilder.CreateBox('box', { width: 2, height: 1.5, depth: 0.1 }, scene);
  box.position.y = 1;
  box.rotation.y = Math.PI * 0.4;

  const hemiLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);
  hemiLight.intensity = 0.3;

  const dirLight = new DirectionalLight('dirLight', new Vector3(-1, -2, -1), scene);
  dirLight.position = new Vector3(20, 40, 20);
  dirLight.intensity = 0.7;

  const shadowGenerator = new ShadowGenerator(1024, dirLight);
  shadowGenerator.addShadowCaster(box);
  shadowGenerator.useExponentialShadowMap = true;

  engine.runRenderLoop(() => {
    scene.render();
  });
}
