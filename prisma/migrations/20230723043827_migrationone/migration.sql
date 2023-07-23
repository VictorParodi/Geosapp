-- CreateEnum
CREATE TYPE "TIPO_TERRENO" AS ENUM ('RURAL', 'URBANO');

-- CreateEnum
CREATE TYPE "TIPO_CONSTRUCCION" AS ENUM ('INDUSTRIAL', 'COMERCIAL', 'RESIDENCIAL');

-- CreateTable
CREATE TABLE "Predio" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "numeroPredial" INTEGER NOT NULL,
    "avaluo" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "tieneTerreno" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Predio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Propietario" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tipoPropietario" TEXT NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "numeroDocumento" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,
    "email" TEXT,
    "predioId" TEXT NOT NULL,

    CONSTRAINT "Propietario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Terreno" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "valorComercial" INTEGER NOT NULL,
    "cercaFuenteAgua" BOOLEAN NOT NULL DEFAULT false,
    "tipo" "TIPO_TERRENO" NOT NULL DEFAULT 'RURAL',
    "tieneConstrucciones" BOOLEAN NOT NULL DEFAULT false,
    "predioId" TEXT NOT NULL,

    CONSTRAINT "Terreno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Construccion" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "numeroPisos" INTEGER NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "tipo" "TIPO_CONSTRUCCION" NOT NULL DEFAULT 'INDUSTRIAL',
    "direccion" TEXT NOT NULL,
    "predioId" TEXT NOT NULL,

    CONSTRAINT "Construccion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Terreno_predioId_key" ON "Terreno"("predioId");

-- CreateIndex
CREATE UNIQUE INDEX "Construccion_predioId_key" ON "Construccion"("predioId");

-- AddForeignKey
ALTER TABLE "Propietario" ADD CONSTRAINT "Propietario_predioId_fkey" FOREIGN KEY ("predioId") REFERENCES "Predio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Terreno" ADD CONSTRAINT "Terreno_predioId_fkey" FOREIGN KEY ("predioId") REFERENCES "Predio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Construccion" ADD CONSTRAINT "Construccion_predioId_fkey" FOREIGN KEY ("predioId") REFERENCES "Predio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
