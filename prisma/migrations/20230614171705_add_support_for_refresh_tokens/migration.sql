/*
  Warnings:

  - You are about to drop the `nessie_migrations` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[refreshTokenId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refreshTokenId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "refreshTokenId" UUID NOT NULL;

-- DropTable
DROP TABLE "nessie_migrations";

-- CreateTable
CREATE TABLE "RefreshTokens" (
    "id" UUID NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "RefreshTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_refreshTokenId_key" ON "Users"("refreshTokenId");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_refreshTokenId_fkey" FOREIGN KEY ("refreshTokenId") REFERENCES "RefreshTokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
