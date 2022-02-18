import { prismaClient } from "../prisma";
import { TBooking } from "../assets/types";

export class BookingService {
  async create(booking: TBooking) {
    try {
      const newBooking = await prismaClient.booking.create({
        data: {
          date: booking.date,
          square: booking.square,
          user: {
            connectOrCreate: {
              create: {
                email: booking.email,
              },
              where: { email: booking.email },
            },
          },
        },
        include: {
          user: true,
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
      include: {
        user: true,
      },
    });
    return booking;
  }

  async getAll() {
    const booking = await prismaClient.booking.findMany({
      include: { user: true },
    });
    return booking;
  }

  async update(booking: TBooking, id: string) {
    const updateBooking = await prismaClient.booking.update({
      data: { square: booking.square, date: booking.date },
      where: { id },
      include: {
        user: true,
      },
    });
    return updateBooking;
  }

  async delete(id: string) {
    await prismaClient.booking.delete({
      where: { id },
    });
  }
}
