"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackEndException = void 0;
class BackEndException extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 500;
    }
}
exports.BackEndException = BackEndException;
