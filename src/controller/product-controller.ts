import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createProductService,
  findProductByIDService,
  getAllProductService,
  ProductData,
} from "../service/product-service";
import { successResponse } from "../helpers";
import { NotFoundError } from "../errors";

export const createProductController = async (req: Request, res: Response) => {
  const { name, price, quantity, description } = req.body as ProductData;
  const data: ProductData = {
    name,
    price,
    quantity,
    description,
  };
  const product = await createProductService(data);

  return successResponse(res, StatusCodes.CREATED, product);
};

export const getProductController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await findProductByIDService(+id);
  if (!product) throw new NotFoundError("Invalid Product ID");

  return successResponse(res, StatusCodes.OK, product);
};

export const getAllProductsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const products = await getAllProductService(req.query);
  if (!products.products || products.products.length < 1)
    throw new NotFoundError("No Product found");

  return successResponse(res, StatusCodes.OK, products);
};
