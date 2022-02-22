import { Request, Response } from "express";
import { TBooking } from "../assets/types";
import { BookingService } from "../services/BookingService";

export class BookingController {
  async getOneBooking(request: Request, response: Response) {
    const id = request.params.id;

    const bookingService = new BookingService();

    const booking = await bookingService.getOne(id);

    if (booking) {
      return response.status(200).json(booking);
    } else {
      return response.status(404).json({ message: "Booking not found" });
    }
  }

  async getByDate(request: Request, response: Response) {
    const { date } = request.query;

    const bookingService = new BookingService();

    if (typeof date === "string") {
      const booking = await bookingService.getByDate(date);

      if (booking) {
        return response.status(200).json(booking);
      } else {
        return response.status(404).json({ message: "Booking not found" });
      }
    }
  }

  async getAllBookings(request: Request, response: Response) {
    const bookingService = new BookingService();

    const bookings = await bookingService.getAll();

    if (bookings) {
      return response.status(200).json(bookings);
    } else {
      return response.status(404).json({ message: "Bookings not found" });
    }
  }

  async upsertBooking(request: Request, response: Response) {
    const booking: TBooking = request.body;

    const bookingService = new BookingService();

    try {
      const updatedBooking = await bookingService.upsert(booking);
      return response.status(200).json(updatedBooking);
    } catch (err) {
      return response.status(404).json({ message: err });
    }
  }

  async deleteBooking(request: Request, response: Response) {
    const id = request.params.id;

    const bookingService = new BookingService();

    try {
      await bookingService.delete(id);
      return response.status(200).json({ message: "Booking cancelled" });
    } catch (err) {
      return response.status(404).json({ message: err });
    }
  }
}
