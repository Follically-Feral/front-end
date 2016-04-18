import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/user-profile/profile.component.html',
    styleUrls: ['app/components/frontend/user-profile/profile.component.css']
})

export class HomeComponent {

    public title            : string;

    constructor() {
        this.title = 'Profile';
    }

}
