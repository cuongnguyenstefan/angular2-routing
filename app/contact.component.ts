import {Component} from 'angular2/core';
import { Router, CanDeactivate } from 'angular2/router'
import { ComponentInstruction } from "angular2/src/router/instruction";

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction) {
        return confirm("Are you sure?");
    }


    constructor(private _router: Router) {

    }

    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }
}