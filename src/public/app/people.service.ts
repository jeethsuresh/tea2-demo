import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class PeopleService {
    private peopleUrl = 'people'

    constructor(private http: Http) { }

    public getPeople(): Promise<Person[]> {
        console.log('Getting People')
        return this.http.get(this.peopleUrl)
            .toPromise()
            .then(response => response.json() as Person[])
            .catch(this.handleError);

    }

    public getPerson(id: number): Promise<Person> {
        console.log('Getting Person by ID')
        const url = `${this.peopleUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Person)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}