"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const logging_1 = __importDefault(require("./src/library/logging"));
const middlewareLogger_1 = __importDefault(require("./src/middleware/middlewareLogger"));
const user_1 = __importDefault(require("./src/routers/user"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const MONGO_URI = 'mongodb://127.0.0.1:27017/new-database?retryWrites=true&w=majority';
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    logging_1.default.info('Connected to mongoDB');
})
    .catch((error) => {
    logging_1.default.error('Unable to connect: ');
    logging_1.default.error(error);
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (rep, res) => {
    res.send('welcome nodejs');
});
// middleware
app.use(middlewareLogger_1.default);
//router
app.use('/user', user_1.default);
app.listen(5000, () => console.log('listening on http://localhost:5000'));
