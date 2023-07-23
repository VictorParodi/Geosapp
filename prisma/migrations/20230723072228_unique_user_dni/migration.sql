/*
  Warnings:

  - A unique constraint covering the columns `[numeroDocumento]` on the table `Propietario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Propietario_numeroDocumento_key" ON "Propietario"("numeroDocumento");
