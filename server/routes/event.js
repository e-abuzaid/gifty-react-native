import express from "express";
import {
  getEvents,
  getEvent,
  deleteEvent,
  createEvent,
  updateEvent,
} from "../controllers/event.js";

const router = express.Router();

router.get("/:id", getEvents);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);
router.get("/:userId/:id", getEvent);
router.put("/:id", updateEvent);

export default router;
