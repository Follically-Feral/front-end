System.register(['angular2/core', 'angular2/router', '../../services/api.service', '../../services/user.service', '../../services/nav.service', '../../services/module.service', "../../services/helpers.service", "../../services/form-data.service", "../../directives/messages/messages.service", "../../services/table-data.service", "../../directives/tables/table.service", "../../services/group.service", './dashboard/dashboard.component', './login/login.component', './navigation/nav.component', './userManagement/user.management.component', "./registration/registration.component"], function(exports_1, context_1) {
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
    var core_1, router_1, api_service_1, user_service_1, nav_service_1, module_service_1, helpers_service_1, form_data_service_1, messages_service_1, table_data_service_1, table_service_1, group_service_1, dashboard_component_1, login_component_1, nav_component_1, user_management_component_1, registration_component_1;
    var ManagementRouterComponent;
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
            function (module_service_1_1) {
                module_service_1 = module_service_1_1;
            },
            function (helpers_service_1_1) {
                helpers_service_1 = helpers_service_1_1;
            },
            function (form_data_service_1_1) {
                form_data_service_1 = form_data_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (table_data_service_1_1) {
                table_data_service_1 = table_data_service_1_1;
            },
            function (table_service_1_1) {
                table_service_1 = table_service_1_1;
            },
            function (group_service_1_1) {
                group_service_1 = group_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (user_management_component_1_1) {
                user_management_component_1 = user_management_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            }],
        execute: function() {
            ManagementRouterComponent = (function () {
                function ManagementRouterComponent(_navService, _apiService, _userService, _moduleService) {
                    this._navService = _navService;
                    this._apiService = _apiService;
                    this._userService = _userService;
                    this._moduleService = _moduleService;
                    // this.appRoutes = this.getAppRoutes();
                }
                ManagementRouterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.user$.subscribe(function (user) { return _this.user = user; });
                    this._userService.loggedInCheck();
                    // this.getModules();
                };
                // Load information for modules
                ManagementRouterComponent.prototype.getModules = function () {
                    var _this = this;
                    this._apiService.get('modules')
                        .subscribe(function (data) { return _this._moduleService.createModules(data.data); }, function (error) { return console.log(error); });
                };
                // Needs further work to get the component part of the route converted from a string to a type
                ManagementRouterComponent.prototype.buildMainMenus = function () {
                    this._moduleService.modules.forEach(function (module) {
                        module.menus.forEach(function (menu) {
                            if (menu.link) {
                                var route = { path: menu.link, component: window[menu.component], as: menu.name };
                                console.log(route);
                                this._navService.addRoute(this.constructor, route);
                                this.appRoutes = this.getAppRoutes();
                            }
                        }, this);
                    }, this);
                };
                ManagementRouterComponent = __decorate([
                    core_1.Component({
                        selector: 'FF-Management',
                        viewProviders: [nav_service_1.NavService],
                        templateUrl: 'app/components/management/management-router.component.html',
                        encapsulation: core_1.ViewEncapsulation.None,
                        directives: [
                            nav_component_1.NavComponent,
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            api_service_1.ApiService,
                            user_service_1.UserService,
                            module_service_1.ModuleService,
                            helpers_service_1.HelpersService,
                            form_data_service_1.FormDataService,
                            table_data_service_1.TableDataService,
                            messages_service_1.MessagesService,
                            table_service_1.TableService,
                            group_service_1.GroupService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', as: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/login', as: 'Login', component: login_component_1.LoginComponent },
                        { path: '/signup', as: 'Signup', component: registration_component_1.RegistrationComponent },
                        { path: '/activate/:id', as: 'Activate', component: registration_component_1.RegistrationComponent },
                        { path: '/usermanagement/...', as: 'UserManagement', component: user_management_component_1.UserManagementComponent }
                    ]), 
                    __metadata('design:paramtypes', [nav_service_1.NavService, api_service_1.ApiService, user_service_1.UserService, module_service_1.ModuleService])
                ], ManagementRouterComponent);
                return ManagementRouterComponent;
            }());
            exports_1("ManagementRouterComponent", ManagementRouterComponent);
        }
    }
});
//# sourceMappingURL=management-router.component.js.map