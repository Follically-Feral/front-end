System.register(['angular2/core', 'angular2/router', "./api.service", "./user.service", "./module.service", "../models/module"], function(exports_1, context_1) {
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
    var core_1, router_1, api_service_1, user_service_1, module_service_1, module_1;
    var AuthService;
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
            function (module_service_1_1) {
                module_service_1 = module_service_1_1;
            },
            function (module_1_1) {
                module_1 = module_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_router, _apiService, _userService, _moduleService) {
                    this._router = _router;
                    this._apiService = _apiService;
                    this._userService = _userService;
                    this._moduleService = _moduleService;
                    this._validUser = false;
                    this._module = new module_1.Module();
                }
                AuthService.prototype.setup = function (moduleName) {
                    var _this = this;
                    this._moduleService.module$.subscribe(function (module) { return _this._module = module; });
                    this._moduleService.getModule(moduleName).then(function () {
                        _this.loggedInCheck();
                    });
                };
                AuthService.prototype.loggedInCheck = function () {
                    var _this = this;
                    // Check that the user is logged in by first checking that they have
                    // a token set and if so is that token still valid
                    if (localStorage.getItem('jwt')) {
                        this._apiService.getWithAuth('loginUser')
                            .subscribe(function (data) { return _this.keyValid(data); }, function (error) { return _this.keyInvalid(); });
                    }
                };
                AuthService.prototype.moduleAccess = function () {
                    if (this._module.permission.view) {
                        return true;
                    }
                    else {
                        this._router.navigate(['Login']);
                    }
                };
                AuthService.prototype.getPagePermissions = function (sectionName) {
                    return this._moduleService.getSection(sectionName).then(function (moduleSection) {
                        return moduleSection.permission;
                    });
                };
                AuthService.prototype.keyValid = function (userData) {
                    var _this = this;
                    if (!this._validUser) {
                        this._validUser = true;
                        this._userService.setUserDetails(userData);
                        this._moduleService.setPermissions().then(function () {
                            _this.moduleAccess();
                        });
                    }
                };
                AuthService.prototype.keyInvalid = function () {
                    this._router.navigate(['Login']);
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, api_service_1.ApiService, user_service_1.UserService, module_service_1.ModuleService])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map