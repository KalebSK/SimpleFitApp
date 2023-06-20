/*
  Warnings:

  - Added the required column `createdBy` to the `Exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercises" ADD COLUMN     "createdBy" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
