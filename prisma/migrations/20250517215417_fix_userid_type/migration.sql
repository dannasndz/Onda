/*
  Warnings:

  - The primary key for the `Reseña` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `albumId` on the `Reseña` table. All the data in the column will be lost.
  - You are about to drop the column `cancionId` on the `Reseña` table. All the data in the column will be lost.
  - You are about to drop the column `creadoEn` on the `Reseña` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Reseña` table. All the data in the column will be lost.
  - You are about to alter the column `contenido` on the `Reseña` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.
  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlbumGenero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Artista` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArtistaGenero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Calificacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cancion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CancionGenero` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `artist` to the `Reseña` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estrellas` to the `Reseña` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Reseña` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Reseña` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Reseña` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Reseña` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Reseña` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_artistaId_fkey";

-- DropForeignKey
ALTER TABLE "AlbumGenero" DROP CONSTRAINT "AlbumGenero_albumId_fkey";

-- DropForeignKey
ALTER TABLE "AlbumGenero" DROP CONSTRAINT "AlbumGenero_generoId_fkey";

-- DropForeignKey
ALTER TABLE "ArtistaGenero" DROP CONSTRAINT "ArtistaGenero_artistaId_fkey";

-- DropForeignKey
ALTER TABLE "ArtistaGenero" DROP CONSTRAINT "ArtistaGenero_generoId_fkey";

-- DropForeignKey
ALTER TABLE "Calificacion" DROP CONSTRAINT "Calificacion_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Calificacion" DROP CONSTRAINT "Calificacion_cancionId_fkey";

-- DropForeignKey
ALTER TABLE "Calificacion" DROP CONSTRAINT "Calificacion_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Cancion" DROP CONSTRAINT "Cancion_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Cancion" DROP CONSTRAINT "Cancion_artistaId_fkey";

-- DropForeignKey
ALTER TABLE "CancionGenero" DROP CONSTRAINT "CancionGenero_cancionId_fkey";

-- DropForeignKey
ALTER TABLE "CancionGenero" DROP CONSTRAINT "CancionGenero_generoId_fkey";

-- DropForeignKey
ALTER TABLE "Reseña" DROP CONSTRAINT "Reseña_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Reseña" DROP CONSTRAINT "Reseña_cancionId_fkey";

-- DropForeignKey
ALTER TABLE "Reseña" DROP CONSTRAINT "Reseña_usuarioId_fkey";

-- DropIndex
DROP INDEX "Reseña_usuarioId_albumId_key";

-- DropIndex
DROP INDEX "Reseña_usuarioId_cancionId_key";

-- AlterTable
ALTER TABLE "Reseña" DROP CONSTRAINT "Reseña_pkey",
DROP COLUMN "albumId",
DROP COLUMN "cancionId",
DROP COLUMN "creadoEn",
DROP COLUMN "usuarioId",
ADD COLUMN     "album" TEXT,
ADD COLUMN     "artist" TEXT NOT NULL,
ADD COLUMN     "coverUrl" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "estrellas" INTEGER NOT NULL,
ADD COLUMN     "genre" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "contenido" SET DATA TYPE VARCHAR(500),
ADD CONSTRAINT "Reseña_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Reseña_id_seq";

-- DropTable
DROP TABLE "Album";

-- DropTable
DROP TABLE "AlbumGenero";

-- DropTable
DROP TABLE "Artista";

-- DropTable
DROP TABLE "ArtistaGenero";

-- DropTable
DROP TABLE "Calificacion";

-- DropTable
DROP TABLE "Cancion";

-- DropTable
DROP TABLE "CancionGenero";

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
