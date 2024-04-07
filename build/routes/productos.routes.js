"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controllers_1 = require("../controllers/productos.controllers");
const router = (0, express_1.Router)();
router.get('/', productos_controllers_1.getProductos);
exports.default = router;
//# sourceMappingURL=productos.routes.js.map