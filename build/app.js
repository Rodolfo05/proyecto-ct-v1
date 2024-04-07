"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const productos_routes_1 = __importDefault(require("./routes/productos.routes"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
let port;
//Configuraciones
app.set('port', config_1.default.port);
//Middlewares: Funciones que procesan los datos antes que lleguen a las rutas
app.use((0, morgan_1.default)('dev'));
//Rutas
app.use(productos_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map