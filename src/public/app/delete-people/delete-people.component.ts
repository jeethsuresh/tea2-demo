import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Person } from '../shared/person';

import { PeopleService } from '../shared/people.service';

@Component({
    selector: 'delete-people',
    templateUrl: 'delete-people.component.html'
})
export class DeletePeopleComponent implements OnChanges {
    @Input() person: Person;
    @Output() updatePeople = new EventEmitter<boolean>();

    constructor(private peopleService: PeopleService) { }

    public delete(id: string): void {
        this.peopleService.deletePerson(id)
            .then(() => this.updatePeople.emit(true));
    }

    ngOnChanges() {}
}