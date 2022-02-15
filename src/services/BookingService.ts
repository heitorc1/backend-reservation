import { prismaClient } from "../prisma";
import { TBooking } from "../assets/types";

export class BookingService {
  async create(booking: TBooking) {
    console.log(booking);
    try {
      const newBooking = await prismaClient.booking.create({
        data: {
          date: booking.date,
          square: booking.square,
        },
      });
      return newBooking;
    } catch (err) {
      console.log(err);
    }
  }

  async getOne(id: string) {
    const booking = await prismaClient.booking.findUnique({
      where: {
        id,
      },
    });
    return booking;
  }

  async getAll() {
    const booking = await prismaClient.booking.findMany({});
    return booking;
  }

  async update(booking: TBooking, id: string) {
    const updateBooking = await prismaClient.booking.update({
      data: { square: booking.square, date: booking.date },
      where: { id },
    });
    return updateBooking;
  }

  async delete(id: string) {
    await prismaClient.booking.delete({
      where: { id },
    });
  }
}
