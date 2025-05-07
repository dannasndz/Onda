/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId,generoId,tipo]` on the table `UsuarioGenero` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tipo` to the `UsuarioGenero` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UsuarioGenero_usuarioId_generoId_key";

-- AlterTable
ALTER TABLE "UsuarioGenero" ADD COLUMN     "tipo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioGenero_usuarioId_generoId_tipo_key" ON "UsuarioGenero"("usuarioId", "generoId", "tipo");
