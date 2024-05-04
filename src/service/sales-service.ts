import { prisma } from "../client";
import { SalesData } from "../interface";




export const createSaleService = async (data: SalesData) => {
  
  const sale = await prisma.sale.create({
    data: {
      quantity_sold:data.quantity_sold,
    product:{
      connect:{id:data.product_id!}
    }
    },
    
  });
  return sale;
};
