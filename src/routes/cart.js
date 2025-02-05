import express from "express";
import { CartManager } from "../models/CartManager.js";
export const cart = () => {
	const router = express.Router();
	const cartManager = new CartManager();

	router.get("/:cid", async (req, res) => {
		try {
			const cart = await cartManager.getCart(Number(req.params.cid));
			cart ? res.json(cart) : res.status(404).json({ error: "No se encontro" });
		} catch (error) {
			res.status(500).json({ error: "Error de servidor" });
		}
	});

	router.post("/:cid/product/:pid", async (req, res) => {
		try {
			const { cid, pid } = req.params;
			const cart = await cartManager.addProductToCart(Number(cid), Number(pid));
			res.json(cart);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	});
};
