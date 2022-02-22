import express from "express";
import { BookingController } from "../controllers/BookingController";

export const router = express.Router();

const controller = new BookingController();

router.put("/api/v1/booking", controller.upsertBooking);
router.get("/api/v1/booking/", controller.getAllBookings);
router.get("/api/v1/booking/:id", controller.getOneBooking);
router.delete("/api/v1/booking/:id", controller.deleteBooking);
