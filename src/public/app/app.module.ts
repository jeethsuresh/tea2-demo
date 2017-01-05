import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Import Components
import { AppComponent } from './app.component';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { CreatePeopleComponent } from './create-people/create-people.component';

// Import Services
import { PeopleService } from './shared/people.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        DeletePeopleComponent,
        CreatePeopleComponent,
    ],
    providers: [
        PeopleService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
