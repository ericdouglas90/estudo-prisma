/*
  Warnings:

  - You are about to drop the column `subTitle` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `subTitle`,
    ADD COLUMN `subtitle` VARCHAR(191) NULL;
