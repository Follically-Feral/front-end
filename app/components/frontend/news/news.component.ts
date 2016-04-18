import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/news/news.component.html',
    styleUrls: ['app/components/frontend/news/news.component.css']
})

export class NewsComponent {

    public title            : string;

    constructor() {
        this.title = 'News';
    }

}
