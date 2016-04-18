import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/contact/contact.component.html',
    styleUrls: ['app/components/frontend/contact/contact.component.css']
})

export class ContactComponent {

    public title            : string;

    constructor() {
        this.title = 'Shop';
    }

}
