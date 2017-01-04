import { Router, Request, Response, NextFunction } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { Person, PostPerson } from './person.model';
import { PeopleMock } from './people.mock';

export class People {
    private _router: Router;

    public static apply(router: Router): void {
        new People(router);
    }

    constructor(router: Router) {
        this._router = router
        this.attachIDRoutes();
        this.attachStdRoutes();
    }

    private attachStdRoutes(): void {
        this._router.route('/people')
            .get((request: Request, response: Response) => {
                return response.json(PeopleMock);
            })
            .head((request: Request, response: Response, next: NextFunction) => {
                next();
            })
            .post((request: Request, response: Response, next: NextFunction) => {
                const uuid: string = uuidV4();
                const body: PostPerson  = request.body as PostPerson
                let person: Person = {
                    name: body["name"],
                    id: uuid
                }
                PeopleMock.push(person);
                return response.status(201).send();
            });
    }

    private attachIDRoutes(): void {
        this._router.route('/people/:id')
            .get((request: Request, response: Response, next: NextFunction) => {
                for (let person of PeopleMock) {
                    if (person.id === request.params["id"]) {
                        return response.json(person)
                    }
                }
                return response.status(404).send();
            })
            .delete((request: Request, response: Response, next: NextFunction) => {
                for (let person of PeopleMock) {
                    if (person.id === request.params["id"]) {
                        const index: number = PeopleMock.indexOf(person, 0);
                        PeopleMock.splice(index, 1);
                        return response.status(204).send();
                    }
                }
                return response.status(404).send();
            })
    }
}