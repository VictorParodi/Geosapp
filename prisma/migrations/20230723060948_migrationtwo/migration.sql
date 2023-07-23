/*
  Warnings:

  - You are about to alter the column `area` on the `Construccion` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `area` on the `Terreno` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Construccion" ALTER COLUMN "area" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Terreno" ALTER COLUMN "area" SET DATA TYPE INTEGER;
