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
exports.PermissionType = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../@application/base/base.entity");
let PermissionType = class PermissionType extends base_entity_1.BaseEntity {
};
PermissionType.SEARCH_TERMS = ['title'];
PermissionType.ORDERS = ['title'];
PermissionType.RELATIONS = [];
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], PermissionType.prototype, "title", void 0);
PermissionType = __decorate([
    (0, typeorm_1.Entity)('permissionTypes')
], PermissionType);
exports.PermissionType = PermissionType;
//# sourceMappingURL=permissionType.entity.js.map