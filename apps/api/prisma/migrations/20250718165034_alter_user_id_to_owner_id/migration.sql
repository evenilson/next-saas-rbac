/*
  Warnings:

  - You are about to drop the column `user_id` on the `oarganizations` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `projects` table. All the data in the column will be lost.
  - Added the required column `owner_id` to the `oarganizations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "oarganizations" DROP CONSTRAINT "oarganizations_user_id_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_user_id_fkey";

-- AlterTable
ALTER TABLE "oarganizations" DROP COLUMN "user_id",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "user_id",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "oarganizations" ADD CONSTRAINT "oarganizations_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
