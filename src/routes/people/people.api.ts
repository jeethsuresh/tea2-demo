import { Router, Request, Response, NextFunction } from 'express';

import { Person } from './person';
import { PeopleMock } from './people.mock';

export class People {
    private _router: Router;

    public static apply(router: Router): void {
        new People(router);
    }

    private bootstrapRoute(): void {
        this._router.route('/people/:id')
            .get((request: Request, response: Response, next: NextFunction) => {
                console.log(request.params["id"])
                for (let person of PeopleMock) {
                    console.log(person.id)
                    if (person.id === Number(request.params["id"])) {
                        return response.json(person)
                    }
                }
                next(new Error('Not Found'))
            });

        this._router.route('/people')
            .get((request: Request, response: Response) => {
                console.log(PeopleMock);
                response.json(PeopleMock);
            })
            .head((request: Request, response: Response, next: NextFunction) => {
                next();
            });
    }

    constructor(router: Router) {
        this._router = router
        this.bootstrapRoute();
    }
}