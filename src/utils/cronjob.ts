import { CronJob } from "cron";
import Logger from "../Logger";
import { createSaleService } from "../service/sales-service";
import { SalesData } from "../interface";
import {
  createProductService,
  getAllProduct_CronService,
} from "../service/product-service";

const generateMockProductData = async () => {
  for (let i = 1; i <= 4; i++) {
    const product = {
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 100) + 50,
      quantity: Math.floor(Math.random() * 50) + 10,
      description: `Description for Product ${i}`,
    };
    await createProductService(product);
  }
};

// Function to start the cron job
export async function sellProduct() {
  new CronJob(
    "0 * * * *", // cronTime
    async function () {
      Logger.info("Sale Cron job is running.");
      await generateMockProductData();
      const products = await getAllProduct_CronService();
      const numOfProducts = products.length;

      if (!products || numOfProducts < 0) {
        Logger.info("No product available for Sale");
        return;
      }

      // Generate random index to select a product
      const randomIndex = Math.floor(Math.random() * numOfProducts);
      const product = products[randomIndex];

      const quantity_sold = Math.floor(Math.random() * 40) + 1;

      const data: SalesData = {
        product_id: product.id,
        quantity_sold,
      };

      await createSaleService(data);
      Logger.info(
        `Sold ${quantity_sold} quantity of product with ID:${product.id} Name:${product.name}`
      );
    }, // onTick
    null, // onComplete
    true // start
  );
}
