"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestOptions = void 0;
const base_interfaces_1 = require("../interfaces/base.interfaces");
const common_1 = require("@nestjs/common");
exports.RequestOptions = (0, common_1.createParamDecorator)((data, req) => {
    return req.args[0].reqOptions;
});
//# sourceMappingURL=requestoptions.decorator.js.map