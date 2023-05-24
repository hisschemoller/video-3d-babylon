// import { AppOne as App } from './AppOne';
import setup from './app/app';

// console.log(`main.ts starting ${App.name}`);
window.addEventListener('DOMContentLoaded', () => {
    // let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    // let app = new App(canvas);
    // app.run();

    setup();
});
