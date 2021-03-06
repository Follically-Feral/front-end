System.register(['angular2/core', 'angular2/router', '../../services/api.service', '../../services/user.service', '../../services/nav.service', './navigation/nav.component', "./home/home.component", "./about/about.component", "./news/news.component", "./shop/shop.component", "./contact/contact.component", "../../directives/messages/messages.service", "../../directives/tables/table.service", "../../services/table-data.service", "./photo-gallery/photo.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, api_service_1, user_service_1, nav_service_1, nav_component_1, home_component_1, about_component_1, news_component_1, shop_component_1, contact_component_1, messages_service_1, table_service_1, table_data_service_1, photo_component_1;
    var FrontendRouterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (nav_service_1_1) {
                nav_service_1 = nav_service_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (news_component_1_1) {
                news_component_1 = news_component_1_1;
            },
            function (shop_component_1_1) {
                shop_component_1 = shop_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (table_service_1_1) {
                table_service_1 = table_service_1_1;
            },
            function (table_data_service_1_1) {
                table_data_service_1 = table_data_service_1_1;
            },
            function (photo_component_1_1) {
                photo_component_1 = photo_component_1_1;
            }],
        execute: function() {
            FrontendRouterComponent = (function () {
                function FrontendRouterComponent(_userService) {
                    this._userService = _userService;
                }
                FrontendRouterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.user$.subscribe(function (user) { return _this.user = user; });
                };
                FrontendRouterComponent = __decorate([
                    core_1.Component({
                        selector: 'FF-Frontend',
                        viewProviders: [nav_service_1.NavService],
                        templateUrl: 'app/components/management/management-router.component.html',
                        encapsulation: core_1.ViewEncapsulation.None,
                        directives: [
                            nav_component_1.NavComponent,
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            user_service_1.UserService,
                            api_service_1.ApiService,
                            messages_service_1.MessagesService,
                            table_service_1.TableService,
                            table_data_service_1.TableDataService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', as: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/about', as: 'About', component: about_component_1.AboutComponent },
                        { path: '/news', as: 'News', component: news_component_1.NewsComponent },
                        { path: '/gallery', as: 'Gallery', component: photo_component_1.PhotoComponent },
                        { path: '/shop', as: 'Shop', component: shop_component_1.ShopComponent },
                        { path: '/contact', as: 'Contact', component: contact_component_1.ContactComponent },
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], FrontendRouterComponent);
                return FrontendRouterComponent;
            }());
            exports_1("FrontendRouterComponent", FrontendRouterComponent);
        }
    }
});
//# sourceMappingURL=frontend-router.component.js.map