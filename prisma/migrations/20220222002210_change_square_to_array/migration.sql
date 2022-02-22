/*
  Warnings:

  - The `square` column on the `Booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[square,date]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "square",
ADD COLUMN     "square" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Booking_square_date_key" ON "Booking"("square", "date");
