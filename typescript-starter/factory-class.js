var Util = /** @class */ (function () {
    function Util() {
    }
    // Poor man impl of UUID generator
    //   https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    Util.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Util;
}());
// A singleton app manager
var AppManager = /** @class */ (function () {
    function AppManager() {
        this.id = Util.uuidv4();
    }
    AppManager.getInstance = function () {
        if (AppManager.INSTANCE == null) {
            AppManager.INSTANCE = new AppManager();
        }
        return AppManager.INSTANCE;
    };
    AppManager.prototype.toString = function () {
        return "AppManager@" + this.id;
    };
    return AppManager;
}());
// Test code
// console.log(new AppManager()); // can not compile
// Same instance of singleton.
console.log(AppManager.getInstance());
console.log(AppManager.getInstance());
console.log(AppManager.getInstance());
