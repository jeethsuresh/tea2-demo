import { Component, OnInit } from '@angular/core';

import '../css/styles.css';

import { Person } from './shared/person';
import { PeopleService } from './shared/people.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public people: Person[];
  public selectedPerson: Person = new Person();

  constructor(private peopleService: PeopleService) { }

  public newSelected(person: Person) {
    this.selectedPerson = person;
  }

  public updatePeople(update: boolean) {
    console.log("update people for table");
    this.getPeople();
  }

  private getPeople(): void {
    console.log("getting people for table")
    this.peopleService.getPeople()
      .then(people => this.people = people);
  }

  ngOnInit(): void {
    this.getPeople();
  }
}

