import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {ManagementRouterComponent} from "./management/management-router.component";
import {FrontendRouterComponent} from "./frontend/frontend-router.component";

@Component({
    selector: 'FF',
    templateUrl: 'app/components/app.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})

@RouteConfig([
    {path: '/...', as: 'Frontend', component: FrontendRouterComponent, useAsDefault: true},
    {path: '/management/...', as: 'Management', component: ManagementRouterComponent}
])

//Main class for application
export class AppComponent {

}


