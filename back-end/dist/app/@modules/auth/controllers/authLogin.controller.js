"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLoginController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const login_user_dto_1 = require("../dtos/login-user.dto");
const auth_login_service_1 = require("./../services/auth-login.service");
let AuthLoginController = class AuthLoginController {
    constructor(authLoginService) {
        this.authLoginService = authLoginService;
    }
    async admin(loginUserDto) {
        return this.authLoginService.loginAdmin(loginUserDto);
    }
    async customer(loginUserDto) {
        return this.authLoginService.loginCustomer(loginUserDto);
    }
};
__decorate([
    (0, common_1.Post)('admin'),
    (0, swagger_1.ApiBody)({ type: login_user_dto_1.LoginUserDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDTO]),
    __metadata("design:returntype", Promise)
], AuthLoginController.prototype, "admin", null);
__decorate([
    (0, common_1.Post)('customer'),
    (0, swagger_1.ApiBody)({ type: login_user_dto_1.LoginUserDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDTO]),
    __metadata("design:returntype", Promise)
], AuthLoginController.prototype, "customer", null);
AuthLoginController = __decorate([
    (0, swagger_1.ApiTags)('Login'),
    (0, common_1.Controller)('auth/login'),
    __metadata("design:paramtypes", [auth_login_service_1.AuthLoginService])
], AuthLoginController);
exports.AuthLoginController = AuthLoginController;
//# sourceMappingURL=authLogin.controller.js.map