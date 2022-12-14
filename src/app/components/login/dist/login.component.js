"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, tostr) {
        this.fb = fb;
        this.router = router;
        this.tostr = tostr;
        this.loginForm = fb.group({
            userName: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _a, _b;
        if (((_a = this.loginForm.get("userName")) === null || _a === void 0 ? void 0 : _a.value) == "Admin" && ((_b = this.loginForm.get("password")) === null || _b === void 0 ? void 0 : _b.value) == "Admin123") {
            this.router.navigate(["home"]);
            this.tostr.success("Login successfully!!!");
        }
        else {
            this.tostr.error("Invalid user details");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
