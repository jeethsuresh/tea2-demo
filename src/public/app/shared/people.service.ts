import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class PeopleService {
    private peopleUrl = 'people'
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

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

    public deletePerson(id: string): Promise<void> {
        console.log('Deleting Person by ID')
        const url = `${this.peopleUrl}/${id}`;
        return this.http.delete(url)
            .toPromise()
            .catch(this.handleError);
    }

    public postPerson(name: string): Promise<void> {
        console.log("Posting Person")
        return this.http.post(this.peopleUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}