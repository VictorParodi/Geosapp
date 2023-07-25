-- DropForeignKey
ALTER TABLE "Construccion" DROP CONSTRAINT "Construccion_predioId_fkey";

-- DropForeignKey
ALTER TABLE "Propietario" DROP CONSTRAINT "Propietario_predioId_fkey";

-- DropForeignKey
ALTER TABLE "Terreno" DROP CONSTRAINT "Terreno_predioId_fkey";

-- AlterTable
ALTER TABLE "Construccion" ALTER COLUMN "predioId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Propietario" ALTER COLUMN "predioId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Terreno" ALTER COLUMN "predioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Propietario" ADD CONSTRAINT "Propietario_predioId_fkey" FOREIGN KEY ("predioId") REFERENCES "Predio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Terreno" ADD CONSTRAINT "Terreno_predioId_fkey" FOREIGN KEY ("predioId") REFERENCES "Predio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Construccion" ADD CONSTRAINT "Construccion_predioId_fkey" FOREIGN KEY ("predioId") REFERENCES "Predio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
