System.register(['angular2/core', 'angular2/router', "../../../common/auth-check", "./users/users.component", "./users/userDetail/user-detail.component", "./groups/groups.component", "./groups/groupDetail/group-detail.component", "./permissions/permissionDetail/permission-detail.component", "./permissions/permissions.component", "../../../services/auth.service", "../../../services/module.service", "../../../models/module"], function(exports_1, context_1) {
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
    var core_1, router_1, auth_check_1, users_component_1, user_detail_component_1, groups_component_1, group_detail_component_1, permission_detail_component_1, permissions_component_1, auth_service_1, module_service_1, module_1;
    var UserManagementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_check_1_1) {
                auth_check_1 = auth_check_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (user_detail_component_1_1) {
                user_detail_component_1 = user_detail_component_1_1;
            },
            function (groups_component_1_1) {
                groups_component_1 = groups_component_1_1;
            },
            function (group_detail_component_1_1) {
                group_detail_component_1 = group_detail_component_1_1;
            },
            function (permission_detail_component_1_1) {
                permission_detail_component_1 = permission_detail_component_1_1;
            },
            function (permissions_component_1_1) {
                permissions_component_1 = permissions_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (module_service_1_1) {
                module_service_1 = module_service_1_1;
            },
            function (module_1_1) {
                module_1 = module_1_1;
            }],
        execute: function() {
            UserManagementComponent = (function () {
                function UserManagementComponent(_authService, _moduleService) {
                    this._authService = _authService;
                    this._moduleService = _moduleService;
                    this.title = 'User Management';
                    this._module = new module_1.Module();
                }
                UserManagementComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._moduleService.module$.subscribe(function (module) { return _this._module = module; });
                    this._moduleService.firstCall();
                    this._authService.loggedInCheck();
                };
                UserManagementComponent = __decorate([
                    core_1.Component({
                        selector: 'user-management',
                        templateUrl: 'app/components/management/userManagement/user.management.component.html',
                        styleUrls: ['app/components/management/userManagement/user.management.component.css'],
                        directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent, useAsDefault: true },
                        { path: '/users/userDetail/:id', name: 'UserDetail', component: user_detail_component_1.UserDetail },
                        { path: '/groups', name: 'Groups', component: groups_component_1.GroupsComponent },
                        { path: '/groups/groupDetail/:id', name: 'GroupDetail', component: group_detail_component_1.GroupDetailComponent },
                        { path: '/permissions', name: 'Permissions', component: permissions_component_1.PermissionsComponent },
                        { path: '/permissions/permissionDetail/:id', name: 'PermissionDetail', component: permission_detail_component_1.PermissionDetailComponent }
                    ]),
                    router_1.CanActivate(function (next, previous) {
                        return auth_check_1.authCheck(next, previous);
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, module_service_1.ModuleService])
                ], UserManagementComponent);
                return UserManagementComponent;
            }());
            exports_1("UserManagementComponent", UserManagementComponent);
        }
    }
});
//# sourceMappingURL=user.management.component.js.map