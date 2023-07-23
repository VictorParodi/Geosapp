/*
  Warnings:

  - A unique constraint covering the columns `[numeroPredial]` on the table `Predio` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Predio_numeroPredial_key" ON "Predio"("numeroPredial");
