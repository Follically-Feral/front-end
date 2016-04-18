import {Component}                  from 'angular2/core';

@Component({
    selector: 'users',
    templateUrl: 'app/components/frontend/shop/shop.component.html',
    styleUrls: ['app/components/frontend/shop/shop.component.css']
})

export class ShopComponent {

    public title            : string;

    constructor() {
        this.title = 'Shop';
    }

}
