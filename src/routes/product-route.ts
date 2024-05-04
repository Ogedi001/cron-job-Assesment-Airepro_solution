import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
  updateProductsController,
} from "../controller/product-controller";
import {
  createProductSchema,
  productByIdSchema,
  productUpdateSchema,
} from "../schema/product-schema";
import { validateRequestMiddleware } from "../middleware";

const router = Router();
router
  .route("/")
  .post(
    createProductSchema(),
    validateRequestMiddleware,
    createProductController
  )
  .get(getAllProductsController);
router
  .route("/:id")
  .get(productByIdSchema(), validateRequestMiddleware, getProductController)
  .put(productUpdateSchema
    (), validateRequestMiddleware, updateProductsController)
  .delete(
    productByIdSchema(),
    validateRequestMiddleware,
    deleteProductController
  );
export { router as productRoute };
