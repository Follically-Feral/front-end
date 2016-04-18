import {Component, ViewEncapsulation}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {ApiService}         from '../../services/api.service';
import {UserService}        from '../../services/user.service';
import {NavService}         from '../../services/nav.service';

import {NavComponent}       from './navigation/nav.component';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NewsComponent} from "./news/news.component";
import {ShopComponent} from "./shop/shop.component";
import {GalleryComponent} from "./photo-gallery/photo.component";
import {ContactComponent} from "./contact/contact.component";
import {MessagesService} from "../../directives/messages/messages.service";
import {TableService} from "../../directives/tables/table.service";
import {TableDataService} from "../../services/table-data.service";

@Component({
    selector: 'FF-Frontend',
    viewProviders: [NavService],
    templateUrl: 'app/components/management/management-router.component.html',
    encapsulation: ViewEncapsulation.None,
    directives: [
        NavComponent,
        ROUTER_DIRECTIVES
    ],
    providers: [
        UserService,
        ApiService,
        MessagesService,
        TableService,
        TableDataService
    ]
})

@RouteConfig([
    {path: '/', as: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/about', as: 'About', component: AboutComponent},
    {path: '/news', as: 'News', component: NewsComponent},
    {path: '/gallery', as: 'Gallery', component: GalleryComponent},
    {path: '/shop', as: 'Shop', component: ShopComponent},
])

//Main class for application
export class FrontendRouterComponent {

    public user      : any;
    public appRoutes : string[][];

    constructor(
        private _userService:UserService
    ) {
    }

    ngOnInit() {
        this._userService.user$.subscribe(user => this.user = user);
    }

}

