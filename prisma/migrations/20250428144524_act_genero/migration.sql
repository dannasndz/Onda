/*
  Warnings:

  - You are about to drop the column `spotifyId` on the `Genero` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Genero_spotifyId_key";

-- AlterTable
ALTER TABLE "Genero" DROP COLUMN "spotifyId";
