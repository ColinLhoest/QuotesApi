"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDataAccess = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
class ApiDataAccess {
    getAsync(uri, params = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.requestAsync('GET', uri, null, params);
        });
    }
    postAsync(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    putAsync(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    deleteAsync(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    requestAsync(method, url, data = null, params = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = `${constants_1.URI_API_BASE}${url}`;
            const config = {
                method: method,
                url: uri,
                params: params,
                data: data
            };
            console.log(config);
            const response = yield (0, axios_1.default)(config);
            console.log('resssponse');
            console.log(response);
            return response.data;
        });
    }
}
exports.apiDataAccess = new ApiDataAccess();
