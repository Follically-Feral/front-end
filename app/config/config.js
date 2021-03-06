System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Config;
    return {
        setters:[],
        execute: function() {
            Config = (function () {
                function Config() {
                }
                /**
                 * Config options for site
                 *
                 * @type {{mame: string, description: string, version: string, devMode: boolean, liveAPIUrl: string, devAPIUrl: string}}
                 */
                Config.properties = {
                    mame: 'Follically Feral Front End',
                    description: 'Angular 2 management frontend for Follically Feral website.',
                    version: '0.0.2',
                    devMode: true,
                    liveAPIUrl: 'https://api.follicallyferal.co.uk/api/',
                    devAPIUrl: 'https://christopher.local.loc/follicalyferal/api/public/index.php/api/'
                };
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=config.js.map