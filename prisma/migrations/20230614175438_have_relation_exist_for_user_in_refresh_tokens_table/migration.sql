/*
  Warnings:

  - You are about to drop the column `refreshTokenId` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `RefreshTokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `RefreshTokens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_refreshTokenId_fkey";

-- DropIndex
DROP INDEX "Users_refreshTokenId_key";

-- AlterTable
ALTER TABLE "RefreshTokens" ADD COLUMN     "userId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "refreshTokenId";

-- CreateIndex
CREATE UNIQUE INDEX "RefreshTokens_userId_key" ON "RefreshTokens"("userId");

-- AddForeignKey
ALTER TABLE "RefreshTokens" ADD CONSTRAINT "RefreshTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
