import server from "./app";
import { prisma } from "./client";
import logger from "./Logger";
import { sellProduct } from "./utils";

const PORT = process.env.PORT || 1000;

// start the express app
const start = async () => {
  try {
    // await prisma.$connect();
    logger.info("connected to the database");

    await sellProduct();
    server.listen(PORT, () => {
      logger.info(`Server started on port ${PORT} 🔥🔥🔥`);
    });
  } catch (err) {
    logger.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
};
start();

// Shutdown hook
const handleShutdown = async () => {
  logger.info("Shutting down server...");
  await prisma.$disconnect();
  server.close(() => {
    logger.info("Server is shut down");
    process.exit(0);
  });
};

// Listen for SIGINT and SIGTERM signals
process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);
