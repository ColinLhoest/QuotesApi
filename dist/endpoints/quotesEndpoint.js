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
const backEndException_1 = require("../exceptions/backEndException");
const router_1 = __importDefault(require("../router"));
const quotesService_1 = require("../services/quotesService");
/**
 *
 */
router_1.default.get('/quotes/random/:limit?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('mtn');
    try {
        const limit = req.params.limit;
        const quotes = yield quotesService_1.quotesService.getRamdomQuoteAsync(req.url, limit);
        res.send(quotes);
    }
    catch (error) {
        console.log(error);
        throw new backEndException_1.BackEndException('Access Denied');
    }
}));
exports.default = router_1.default;
