"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
class UnauthorizedException extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 401;
    }
}
exports.UnauthorizedException = UnauthorizedException;
