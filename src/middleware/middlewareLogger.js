"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let MiddlewareLogger = (request, response, next) => {
    let url = request.url;
    let method = request.method;
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let result = `[${url}] [${method}] - [${date}] = [${time}] `;
    console.log(result);
    next();
};
exports.default = MiddlewareLogger;
