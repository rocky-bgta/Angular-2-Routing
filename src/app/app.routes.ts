import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home-component.component";
import {RouterModule, Routes} from "@angular/router";
import {USER_ROUTES} from "./user/user.routes";


const APP_ROUTES: Routes=[
    //{path: 'user', redirectTo:'/user/1'},
    {path: 'user/:id', component: UserComponent},
    // complete route path comes after combining child route path so see the USER_ROUTES first
    {path: 'user/:id', component:UserComponent, children: USER_ROUTES},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo:'/user/1', pathMatch: 'full'}
]



export const routing = RouterModule.forRoot(APP_ROUTES);