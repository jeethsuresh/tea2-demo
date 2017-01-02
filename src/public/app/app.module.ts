import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PeopleService } from './people.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [AppComponent],
    providers: [PeopleService],
    bootstrap: [AppComponent],
})
export class AppModule { }
