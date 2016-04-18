import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/about/about.component.html',
    styleUrls: ['app/components/frontend/about/about.component.css']
})

export class AboutComponent {

    public title            : string;

    constructor() {
        this.title = 'About';
    }

}
