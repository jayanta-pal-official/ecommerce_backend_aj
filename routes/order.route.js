import express from "express";
const router = express.Router();
import asyncWrapper from "../utils/asyncWrapper.js";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getUserOrders,
  updateOrder,
} from "../controllers/order.controller.js";

router.post("/new", asyncWrapper(createOrder));
router.get("/user/:id", asyncWrapper(getUserOrders));
router.get("/:id", asyncWrapper(getOrder));
router.put("/update/:id", asyncWrapper(updateOrder));
router.delete("/remove/:id", asyncWrapper(deleteOrder));

export default router;
