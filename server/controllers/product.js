import Product from "../mongodb/models/product.js";
import mongoose from "mongoose";
import express from "express";
import * as dotenv from "dotenv";

export const getProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.find({ user: id });
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  console.log(product);
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Person with that id");
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
