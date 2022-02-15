import express from "express";
import { BookingController } from "../controllers/BookingController";

export const router = express.Router();

const controller = new BookingController();

router.get("/api/v1/booking/", controller.getAllBookings);
router.get("/api/v1/booking/:id", controller.getOneBooking);
router.post("/api/v1/booking", controller.createBooking);
router.put("/api/v1/booking/:id", controller.updateBooking);
router.delete("/api/v1/booking/:id", controller.deleteBooking);
