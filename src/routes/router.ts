import { Router } from 'express';

import { People } from './people/people.api';

export class APIRouter {
    public apiRouter: Router;

    constructor() {
        this.apiRouter = Router();
        People.apply(this.apiRouter);
    }

    public routes(): Router {
        return this.apiRouter;
    }
}