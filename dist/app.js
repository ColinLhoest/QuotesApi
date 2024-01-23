"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quotesEndpoint_1 = __importDefault(require("./endpoints/quotesEndpoint"));
const app = (0, express_1.default)();
const port = 3030;
app.use(express_1.default.json());
app.use('/api', quotesEndpoint_1.default);
app.get('/test', (req, res) => {
    console.log('Test route hit');
    res.send('Test route works');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
