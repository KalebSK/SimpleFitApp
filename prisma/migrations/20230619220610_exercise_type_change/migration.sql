/*
  Warnings:

  - The values [Muscle] on the enum `ExerciseType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExerciseType_new" AS ENUM ('Cardio', 'Strength');
ALTER TABLE "Exercises" ALTER COLUMN "exercise_type" DROP DEFAULT;
ALTER TABLE "Exercises" ALTER COLUMN "exercise_type" TYPE "ExerciseType_new" USING ("exercise_type"::text::"ExerciseType_new");
ALTER TYPE "ExerciseType" RENAME TO "ExerciseType_old";
ALTER TYPE "ExerciseType_new" RENAME TO "ExerciseType";
DROP TYPE "ExerciseType_old";
ALTER TABLE "Exercises" ALTER COLUMN "exercise_type" SET DEFAULT 'Cardio';
COMMIT;
