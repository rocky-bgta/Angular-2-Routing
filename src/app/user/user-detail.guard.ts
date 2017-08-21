import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by nybsys on 8/21/17.
 */

export class UserDetailGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | boolean {
        return confirm('Are you sure?');
    }

}