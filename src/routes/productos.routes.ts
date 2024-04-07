import { Router } from "express";

import {getProductos} from '../controllers/productos.controllers'

const router: Router = Router();

router.get('/', getProductos)

export default router;