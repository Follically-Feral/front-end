import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/sidebar/sidebar.component.html',
    styleUrls: ['app/components/frontend/sidebar/sidebar.component.css']
})

export class HomeComponent {

    public title            : string;

    constructor() {
        this.title = 'Sidebar';
    }

}
