"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEventModule = void 0;
const common_1 = require("@nestjs/common");
const permission_module_1 = require("../../@modules/permission/permission.module");
const usercreated_event_1 = require("./user/usercreated.event");
const EVENTS = [usercreated_event_1.UserCreatedEvent];
let AppEventModule = class AppEventModule {
};
AppEventModule = __decorate([
    (0, common_1.Module)({
        imports: [permission_module_1.PermissionModule],
        controllers: [],
        providers: [...EVENTS],
    })
], AppEventModule);
exports.AppEventModule = AppEventModule;
//# sourceMappingURL=appevent.module.js.map