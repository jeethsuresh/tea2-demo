import { Person } from './person.model';
import { v4 as uuidV4 } from 'uuid';

let People: Person[] = [
    { name: "Billy", id: uuidV4() },
    { name: "Travis", id: uuidV4() },
    { name: "Danielle", id: uuidV4() },
    { name: "Tommy", id: uuidV4() },
    { name: "Stacy", id: uuidV4() },
    { name: "Candice", id: uuidV4() },
    { name: "Ken", id: uuidV4() }
];

export { People as PeopleMock };