import express from "express";
import {
  getProducts,
  deleteProduct,
  createProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/:id", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

export default router;
