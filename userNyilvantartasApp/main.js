import { Frontend } from './frontend/Frontend.class.js';
import { Backend } from './backend/Backend.class.js';

class App {
    start(frontend, backend) {
        console.log("App started with frontend and backend.");
        frontend.init();
        backend.init();
    }
}


const app = new App();
const frontend = new Frontend();
const backend = new Backend();
app.start(frontend, backend);