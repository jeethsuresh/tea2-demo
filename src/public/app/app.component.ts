import { Component, OnInit } from '@angular/core';

import '../css/styles.css';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople()
      .then(people => this.people = people);
  }
 }

