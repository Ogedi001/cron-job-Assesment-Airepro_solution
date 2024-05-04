import { Router } from "express";
import { productRoute } from "./product-route";
import { salesRoute } from "./sales-route";


const router = Router()

router.use('/product', productRoute)
router.use('/sale',salesRoute)

export {router as applicationRoutes}