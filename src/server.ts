import * as express from 'express';
import * as bodyParser from 'body-parser';

import { APIRouter } from './routes/router';

export class Server {
    private app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3000;
        this.staticRoutes();
        this.middlewares();
        this.apiRoutes();
    }

    private middlewares(): void {
        // mount json form parser
        this.app.use(bodyParser.json({
            strict: true
        }));

        // mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    private staticRoutes(): void {
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

const bootstrap: () => void = function(): void {
    const server = new Server();
    server.listen();
}

bootstrap();