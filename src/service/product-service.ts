import { Product } from "@prisma/client";
import { prisma } from "../client";
import { Pagination } from "../interface/product-interface";
import { SalesData } from "../interface";

export type ProductData = Pick<
  Product,
  "name" | "price" | "quantity" | "description"
>;

export type ProductReturnedData = {
  sales: SalesData[];
} & Product;

export type ProductsReturnedData = {
  pagination: Pagination;
  products:ProductReturnedData[]
};

export const createProductService = async (data: ProductData) => {
  const product = await prisma.product.create({
    data: {
      ...data,
    },
  });
  return product;
};

export const findProductByIDService = async (id: number):Promise<ProductReturnedData|null> => {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      sales: {
        select: {
          id: true,
          quantity_sold: true,
          sale_date: true,
        },
      },
    },
  });
  return product;
};


export const getAllProductService = async (query: any):Promise<ProductsReturnedData> => {
  const limit = parseInt(query.limit || "10");
  const page = parseInt(query.page || "1");
  const startIndex = (page - 1) * limit;
  const products = await prisma.product.findMany({
    include: {
      sales: {
        select: {
          id: true,
          quantity_sold: true,
          sale_date: true,
        },
      },
    },
    take: limit,
    skip: startIndex,
  });
  const totalProduct = await prisma.product.count();
  const totalPages = Math.ceil(totalProduct / limit);
  return {
    pagination: {
      page,
      limit,
      totalPages,
      totalProduct,
    },
    products,
  };
};
export const updateProductService = async (id:number,data: ProductData) => {
  const product = await prisma.product.update({
    where:{id},
    data: {
      ...data,
    },
  });
  return product;
};

export const deleteProductService = async (id:number) => {
  const product = await prisma.product.delete({
    where:{id},
  });
  return product;
};



