"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const apiDataAccess_1 = require("../dataAccess/apiDataAccess/apiDataAccess");
class Service {
    constructor() {
        this.dataAccess = apiDataAccess_1.apiDataAccess;
    }
}
exports.Service = Service;
