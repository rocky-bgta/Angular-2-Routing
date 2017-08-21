import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
    `
})
export class UserComponent implements  OnDestroy{

    id: string;
    private subsciption: Subscription;

    constructor(private router: Router, private activatedRoute: ActivatedRoute){
        this.subsciption = activatedRoute.params.subscribe(
            (param: any) => this.id = param['id']
        );
    }
    onNavigate(){
        this.router.navigate(['/'], {queryParams: {'analytics': 100}});
    }

    ngOnDestroy(): void {
        this.subsciption.unsubscribe();
    }
}
