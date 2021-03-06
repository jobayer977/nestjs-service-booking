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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const typeorm_1 = require("typeorm");
const base_1 = require("../../../@application/base");
const permissionType_entity_1 = require("./permissionType.entity");
let Permission = class Permission extends base_1.BaseEntity {
};
Permission.SEARCH_TERMS = ['title'];
Permission.ORDERS = ['title'];
Permission.RELATIONS = ['permissionType'];
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Permission.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => permissionType_entity_1.PermissionType),
    __metadata("design:type", permissionType_entity_1.PermissionType)
], Permission.prototype, "permissionType", void 0);
Permission = __decorate([
    (0, typeorm_1.Entity)('permissions')
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=permissions.entity.js.map