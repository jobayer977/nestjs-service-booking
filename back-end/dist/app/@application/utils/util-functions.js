"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncForEach = exports.getEntityProperties = exports.extractToken = exports.ILIKE = void 0;
const typeorm_1 = require("typeorm");
const base_interfaces_1 = require("../interfaces/base.interfaces");
const ILIKE = (searchterm) => {
    return typeorm_1.Raw((alias) => `${alias} ILIKE '%${searchterm}%'`);
};
exports.ILIKE = ILIKE;
function extractToken(headers) {
    let token = headers && headers.authorization ? headers.authorization : '';
    token = token.replace(/Bearer\s+/gm, '');
    return token;
}
exports.extractToken = extractToken;
async function getEntityProperties(entityName) {
    try {
        const entity = await typeorm_1.getConnection().getMetadata(entityName);
        const searchTerms = entity.target.SEARCH_TERMS || [];
        const orders = entity.target.ORDERS || [];
        const ownColumns = await entity.ownColumns
            .map((column) => column.propertyName)
            .filter((colName) => colName !== 'id');
        const relations = await entity.relations.map((column) => column.propertyName);
        relations.map((r) => {
            if (ownColumns.includes(r)) {
                const i = ownColumns.indexOf(r);
                ownColumns.splice(i, 1);
            }
        });
        return { ownColumns, relations, searchTerms, orders };
    }
    catch (error) {
        new Error('Invalid Entity Name');
    }
}
exports.getEntityProperties = getEntityProperties;
const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
exports.asyncForEach = asyncForEach;
//# sourceMappingURL=util-functions.js.map