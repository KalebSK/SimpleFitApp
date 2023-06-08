-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('Cardio', 'Muscle');

-- CreateEnum
CREATE TYPE "MuscleGroup" AS ENUM ('Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Abs');

-- CreateTable
CREATE TABLE "ExerciseProgresses" (
    "id" UUID NOT NULL,
    "date" DATE NOT NULL,
    "prevRep" INTEGER,
    "newRep" INTEGER,
    "prevWeight" INTEGER,
    "newWeight" INTEGER,
    "prevDur" DOUBLE PRECISION,
    "newDur" DOUBLE PRECISION,

    CONSTRAINT "ExerciseProgresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL DEFAULT 'an exercise',
    "description" TEXT DEFAULT 'this is an exercise',
    "muscle_group" "MuscleGroup",
    "exercise_type" "ExerciseType" NOT NULL DEFAULT 'Cardio',

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercises_WorkoutPlans" (
    "Exercises_id" UUID NOT NULL,
    "WorkoutPlans_id" UUID NOT NULL,

    CONSTRAINT "Exercises_WorkoutPlans_pkey" PRIMARY KEY ("Exercises_id","WorkoutPlans_id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" UUID NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "profile_pic_uri" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users_Exercises" (
    "Users_id" UUID NOT NULL,
    "Exercises_id" UUID NOT NULL,

    CONSTRAINT "Users_Exercises_pkey" PRIMARY KEY ("Users_id","Exercises_id")
);

-- CreateTable
CREATE TABLE "Users_WorkoutPlans" (
    "Users_id" UUID NOT NULL,
    "WorkoutPlans_id" UUID NOT NULL,

    CONSTRAINT "Users_WorkoutPlans_pkey" PRIMARY KEY ("Users_id","WorkoutPlans_id")
);

-- CreateTable
CREATE TABLE "WorkoutPlans" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT DEFAULT 'a workout plan',

    CONSTRAINT "WorkoutPlans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nessie_migrations" (
    "id" BIGSERIAL NOT NULL,
    "file_name" VARCHAR(100),
    "created_at" TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nessie_migrations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "nessie_migrations_file_name_key" ON "nessie_migrations"("file_name");

-- AddForeignKey
ALTER TABLE "ExerciseProgresses" ADD CONSTRAINT "ExerciseProgresses_id_fkey" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ExerciseProgresses" ADD CONSTRAINT "ExerciseProgresses_id_fkey1" FOREIGN KEY ("id") REFERENCES "Exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Exercises_WorkoutPlans" ADD CONSTRAINT "Exercises_WorkoutPlans_Exercises_id_fkey" FOREIGN KEY ("Exercises_id") REFERENCES "Exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Exercises_WorkoutPlans" ADD CONSTRAINT "Exercises_WorkoutPlans_WorkoutPlans_id_fkey" FOREIGN KEY ("WorkoutPlans_id") REFERENCES "WorkoutPlans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users_Exercises" ADD CONSTRAINT "Users_Exercises_Exercises_id_fkey" FOREIGN KEY ("Exercises_id") REFERENCES "Exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users_Exercises" ADD CONSTRAINT "Users_Exercises_Users_id_fkey" FOREIGN KEY ("Users_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users_WorkoutPlans" ADD CONSTRAINT "Users_WorkoutPlans_Users_id_fkey" FOREIGN KEY ("Users_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Users_WorkoutPlans" ADD CONSTRAINT "Users_WorkoutPlans_WorkoutPlans_id_fkey" FOREIGN KEY ("WorkoutPlans_id") REFERENCES "WorkoutPlans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

