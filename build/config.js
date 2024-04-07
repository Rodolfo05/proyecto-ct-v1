"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env.HOLA);
exports.default = {
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER || '',
    dbPass: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
};
//# sourceMappingURL=config.js.map