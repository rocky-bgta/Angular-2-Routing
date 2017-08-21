import {RouterConfig} from "@angular/router";
import {UserDetailComponent} from "./user-detail.component";
import {UserEditComponent} from "./user-edit.component";
import {UserDetailGuard} from "./user-detail.guard";
import {UserEditGuard} from "./user-edit.guard";

/**
 * Created by nybsys on 8/21/17.
 */

export const USER_ROUTES: RouterConfig=[
    {path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard]},
    {path: 'edit', component: UserEditComponent, canDeactivate: [UserEditGuard]}
]