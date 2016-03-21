System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ModuleSection;
    return {
        setters:[],
        execute: function() {
            ModuleSection = (function () {
                function ModuleSection(id, name, description) {
                    this._id = id;
                    this._name = name;
                    this._description = description;
                }
                Object.defineProperty(ModuleSection.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    set: function (value) {
                        this._id = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ModuleSection.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (value) {
                        this._name = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ModuleSection.prototype, "description", {
                    get: function () {
                        return this._description;
                    },
                    set: function (value) {
                        this._description = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ModuleSection;
            }());
            exports_1("ModuleSection", ModuleSection);
        }
    }
});
//# sourceMappingURL=module.section.js.map