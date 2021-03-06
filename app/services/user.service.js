System.register(['angular2/core', 'rxjs/Observable', 'angular2/router', 'rxjs/add/operator/share', '../models/user', "./api.service", "../directives/messages/messages.service", "../directives/tables/table.service", "./table-data.service"], function(exports_1, context_1) {
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
    var core_1, Observable_1, router_1, user_1, api_service_1, messages_service_1, table_service_1, table_data_service_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (table_service_1_1) {
                table_service_1 = table_service_1_1;
            },
            function (table_data_service_1_1) {
                table_data_service_1 = table_data_service_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_apiService, _router, _messageService, _tableService, _tableDataService) {
                    var _this = this;
                    this._apiService = _apiService;
                    this._router = _router;
                    this._messageService = _messageService;
                    this._tableService = _tableService;
                    this._tableDataService = _tableDataService;
                    this._user = new user_1.User();
                    this._users = [];
                    this.user$ = Observable_1.Observable.create(function (observer) { return _this._userObserver = observer; }).share();
                    this.users$ = Observable_1.Observable.create(function (observer) { return _this._usersObserver = observer; }).share();
                }
                UserService.prototype.setUserDetails = function (userData) {
                    this._user.email = userData.email;
                    this._user.id = userData.id;
                    this._user.username = userData.username;
                    this._user.role = userData.role;
                    this._user.last_login = userData.last_login;
                    this._user.active = userData.active;
                    this._user.loggedIn = true;
                    this._user.forename = userData.forename;
                    this._user.surname = userData.surname;
                    this._user.dob = userData.dob;
                    this._user.country = userData.country;
                    this._user.website = userData.website;
                    this._user.avatar = userData.avatar;
                    this._user.twitter_username = userData.twitter_username;
                    this._user.facebook = userData.facebook;
                    this._userObserver.next(this._user);
                };
                UserService.prototype.create = function (userData) {
                    var user = new user_1.User();
                    user.email = userData.email;
                    user.id = userData.id;
                    user.username = userData.username;
                    user.role = userData.role;
                    user.last_login = userData.last_login;
                    user.active = userData.active;
                    user.forename = userData.forename;
                    user.surname = userData.surname;
                    user.dob = userData.dob;
                    user.country = userData.country;
                    user.website = userData.website;
                    user.avatar = userData.avatar;
                    user.twitter_username = userData.twitter_username;
                    user.facebook = userData.facebook;
                    return user;
                };
                UserService.prototype.get = function (id) {
                    return Promise.resolve(this._users).then(function (users) { return users.filter(function (user) { return user.id === id; })[0]; });
                };
                UserService.prototype.getUsers = function (page, queryAPI, buildTableData) {
                    var _this = this;
                    if (page === void 0) { page = 1; }
                    if (queryAPI === void 0) { queryAPI = false; }
                    if (buildTableData === void 0) { buildTableData = false; }
                    if (this._users.length === 0 || queryAPI) {
                        return this._apiService.getPromiseWithAuth('users?page=' + page)
                            .then(function (data) { return _this.buildUsers(data, buildTableData); }, function (error) {
                            _this._messageService.addMessage({
                                success: null,
                                error: error
                            });
                        });
                    }
                    else {
                        return Promise.resolve(this._users).then(function (users) {
                            _this.setUsers(users);
                            if (buildTableData) {
                                _this.updateTable();
                            }
                        });
                    }
                };
                UserService.prototype.getUserWithPermissions = function () {
                    return this._apiService.getPromiseWithAuth('findPermissionsForUser/' + this._user.id)
                        .then(function (data) { return data; }, function (error) { return console.log(error); });
                };
                UserService.prototype.set = function (user) {
                    this._user = user;
                    this._userObserver.next(this._user);
                };
                UserService.prototype.setUsers = function (users) {
                    this._users = users;
                    this._usersObserver.next(this._users);
                };
                UserService.prototype.add = function (user) {
                    var _this = this;
                    this._apiService.postWithAuth('users', this.generateData(user)).subscribe(function (data) {
                        _this._messageService.addMessage({
                            success: data.success.message,
                            error: null
                        });
                    }, function (error) {
                        _this._messageService.addMessage({
                            success: null,
                            error: error.message
                        });
                    }, function () {
                        _this.getUsers(1, true, true).then(function () {
                            _this.getUsers(_this._tableDataService.table.totalPages, true, true);
                        });
                    });
                };
                UserService.prototype.update = function (user) {
                    var _this = this;
                    this._apiService.patch('users/' + user.id, this.generateData(user)).subscribe(function (data) {
                        _this._messageService.addMessage({
                            success: data.success.message,
                            error: null
                        });
                    }, function (error) {
                        _this._messageService.addMessage({
                            success: null,
                            error: error.message
                        });
                    });
                };
                UserService.prototype.delete = function (user) {
                    var _this = this;
                    this._apiService.delete('users/' + user.id).subscribe(function (data) {
                        _this._messageService.addMessage({
                            success: data.success.message,
                            error: null
                        });
                    }, function (error) {
                        _this._messageService.addMessage({
                            success: null,
                            error: error.message
                        });
                    }, function () {
                        _this.getUsers(1, true, true).then(function () {
                            _this.getUsers(_this._tableDataService.table.totalPages, true, true);
                        });
                    });
                };
                UserService.prototype.generateData = function (user) {
                    return {
                        role: user.role,
                        email: user.email,
                        forename: user.forename,
                        surname: user.surname,
                        username: user.username
                    };
                };
                UserService.prototype.setActiveStatus = function (id) {
                    var _this = this;
                    this._apiService.patch('setActiveStatus/' + id, {}).subscribe(function (data) {
                        _this._messageService.addMessage({
                            success: data.success.message,
                            error: null
                        });
                    }, function (error) {
                        _this._messageService.addMessage({
                            success: null,
                            error: error.message
                        });
                    }, function () {
                        _this.get(id).then(function (user) {
                            var userObject = user;
                            userObject.active = (userObject.active) ? false : true;
                            _this.updateUserInUsers(userObject);
                        });
                    });
                };
                UserService.prototype.findUsers = function (searchTerm) {
                    return this._apiService.getPromiseWithAuth('findUsers/' + searchTerm)
                        .then(function (data) {
                        var userData = [];
                        data.data.forEach(function (user) {
                            userData.push({
                                id: user.id,
                                name: user.forename + " " + user.surname
                            });
                        });
                        return userData;
                    }, function (error) {
                        return [];
                    });
                };
                UserService.prototype.updateUserInUsers = function (user) {
                    this._users.forEach(function (userObject, index) {
                        if (user.id === userObject.id) {
                            this._users[index] = user;
                        }
                    }, this);
                    this._usersObserver.next(this._users);
                    this.updateTable();
                };
                /**
                 * Build users array from server data
                 *
                 * @param {Object[]} usersData
                 * @param {boolean} buildTableData
                 * @param {Object[]} usersData.data
                 * @param {Object} usersData.data.user
                 * @param {Object} usersData.data.userDetails
                 * @param {Object} usersData.paginator
                 * @param {Object} usersData.paginator.per_page
                 * @param {Object} usersData.paginator.last_page
                 * @param {Object} usersData.paginator.current_page
                 */
                UserService.prototype.buildUsers = function (usersData, buildTableData) {
                    var _this = this;
                    if (buildTableData === void 0) { buildTableData = false; }
                    this._users = [];
                    for (var key in usersData.data) {
                        var userInfo = void 0;
                        if (usersData.data.hasOwnProperty(key)) {
                            userInfo = usersData.data[key];
                        }
                        var user = new user_1.User();
                        user.email = userInfo.email;
                        user.id = userInfo.id;
                        user.username = userInfo.username;
                        user.role = userInfo.role;
                        user.last_login = userInfo.last_login;
                        user.active = userInfo.active;
                        user.forename = userInfo.forename;
                        user.surname = userInfo.surname;
                        user.dob = userInfo.dob;
                        user.country = userInfo.country;
                        user.website = userInfo.website;
                        user.avatar = userInfo.avatar;
                        user.twitter_username = userInfo.twitter_username;
                        user.facebook = userInfo.facebook;
                        this._users.push(user);
                    }
                    this.setUsers(this._users);
                    if (buildTableData) {
                        this._tableDataService.getUsersTableData(this._users, true, usersData.paginator)
                            .then(function (table) { return _this._tableService.addTable(table); });
                    }
                    return this._users;
                };
                UserService.prototype.updateTable = function () {
                    var _this = this;
                    this._tableDataService.getUsersTableData(this._users, false)
                        .then(function (table) { return _this._tableService.addTable(table); });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router, messages_service_1.MessagesService, table_service_1.TableService, table_data_service_1.TableDataService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map