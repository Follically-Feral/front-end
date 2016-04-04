import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/home/home.component.html',
    styleUrls: ['app/components/frontend/home/home.component.css']
})

export class HomeComponent {

    public title            : string;

    constructor() {
        this.title = 'Home';
    }

}

