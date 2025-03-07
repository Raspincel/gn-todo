/*
  Warnings:

  - The primary key for the `TodoItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `TodoItems` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TodoItems" DROP CONSTRAINT "TodoItems_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "TodoItems_pkey" PRIMARY KEY ("id");
