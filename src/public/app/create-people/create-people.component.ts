import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Person } from '../shared/person';

import { PeopleService } from '../shared/people.service';

@Component({
    selector: 'create-people',
    templateUrl: 'create-people.component.html'
})
export class CreatePeopleComponent implements OnChanges {
    @Output() updatePeople = new EventEmitter<boolean>();
    public userName: string;

    constructor(private peopleService: PeopleService) { }

    public postPerson(name: string): void {
        this.peopleService.postPerson(name)
            .then(() => this.updatePeople.emit(true));
    }

    ngOnChanges() {}
}