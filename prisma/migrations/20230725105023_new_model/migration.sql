-- DropIndex
DROP INDEX "Propietario_numeroDocumento_key";

-- AlterTable
ALTER TABLE "Construccion" ALTER COLUMN "numeroPisos" DROP NOT NULL,
ALTER COLUMN "area" DROP NOT NULL,
ALTER COLUMN "tipo" DROP NOT NULL,
ALTER COLUMN "direccion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Terreno" ALTER COLUMN "area" DROP NOT NULL,
ALTER COLUMN "valorComercial" DROP NOT NULL,
ALTER COLUMN "cercaFuenteAgua" DROP NOT NULL,
ALTER COLUMN "tipo" DROP NOT NULL,
ALTER COLUMN "tieneConstrucciones" DROP NOT NULL;
