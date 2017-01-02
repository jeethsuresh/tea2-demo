import * as express from "express";

import { APIRouter } from './routes/router';

export class Server {
    public app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3000;
        this.useStatic();
        this.apiRoutes();
    }

    private useStatic(): void {
        this.app.use(express.static('dist'));
    }

    private apiRoutes(): void {
        let apiRouter = new APIRouter();
        this.app.use(apiRouter.routes());
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log("Test Express server with Typescript")
        });
    }
}

const bootstrap: () => void = function bootstrap(): void {
    const server = new Server();
    server.listen();
}

bootstrap();