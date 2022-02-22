/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Booking_square_date_key";

-- CreateIndex
CREATE UNIQUE INDEX "Booking_date_key" ON "Booking"("date");
