import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from 'babylonjs';

export default function setup() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const engine = new Engine(canvas);
  window.addEventListener('resize', () => {
    engine.resize();
  });

  const scene = new Scene(engine);

  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2, segments: 32 }, scene);
  sphere.position.y = 1;

  const ground = MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);

  engine.runRenderLoop(() => {
    scene.render();
  });
}
