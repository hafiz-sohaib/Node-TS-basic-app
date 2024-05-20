"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4200;
app.use(express_1.default.json());
app.get('/', (request, response) => {
    response.status(200).json({ message: "Hello World" });
});
app.listen(port, () => console.log(`PORT listening on port ${port}`));
