import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/photo-gallery/photo.component.html',
    styleUrls: ['app/components/frontend/photo-gallery/photo.component.css']
})

export class PhotoComponent {

    public title            : string;

    constructor() {
        this.title = 'Photo-Gallery';
    }

}
