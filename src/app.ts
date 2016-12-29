import * as express from "express";

class Server {
    public app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3000;
        this.useStatic();
    }

    private useStatic(): void {
        this.app.use(express.static('dist'));
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log("Test Express server with Typescript")
        });
    }
}

const server = new Server();
server.listen();