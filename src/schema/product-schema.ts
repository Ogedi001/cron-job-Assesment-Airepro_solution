import { body, param } from "express-validator";

export const productByIdSchema = () => {
  return [param("id").notEmpty().withMessage("Product Id param is required")];
};

export const createProductSchema = () => {
  return [
    body("name")
      .notEmpty().withMessage("Name is required"),
    body("price")
      .notEmpty().withMessage("Price is required")
      .isNumeric().withMessage("Price must be a number"),
    body("quantity")
      .notEmpty().withMessage("Quantity is required")
      .isInt({ min: 0 }).withMessage("Quantity must be a non-negative integer"),
    body("description")
      .notEmpty().withMessage("Description is required")
  ];
};

export const productUpdateSchema = () => {
  return [
    param("id").notEmpty().withMessage("Product Id param is required"),
    body("payload").notEmpty().withMessage("Payload is required"),
    body("payload").custom((value: any) => {
      if (!value || typeof value !== 'object') {
        throw new Error("Payload must be an object");
      }
      if (
        !('name' in value) &&
        !('price' in value) &&
        !('quantity' in value) &&
        !('description' in value)
      ) {
        throw new Error("Payload must contain at least one valid field (name, price, quantity, description)");
      }
      return true;
    })
  ];
};