import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserEditComponent } from "./user/user-edit.component";
import { HomeComponent } from "./home-component.component";
import {routing} from "./app.routes";
import {UserDetailGuard} from "./user/user-detail.guard";
import {UserEditGuard} from "./user/user-edit.guard";



@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        UserEditComponent,
        HomeComponent,
    ],
    providers:[UserDetailGuard, UserEditGuard],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {}