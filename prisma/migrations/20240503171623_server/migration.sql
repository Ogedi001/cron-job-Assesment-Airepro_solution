/*
  Warnings:

  - You are about to drop the column `soldAt` on the `sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `sales` DROP COLUMN `soldAt`,
    MODIFY `sale_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
