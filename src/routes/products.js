import express from "express";
import { body, validationResult } from "express-validator";
import { ProductManager } from "../models/ProductManager.js";

export const products = () => {
	const router = express.Router();
	const productManager = new ProductManager();

	const validateResult = [
		body("title").isString().notEmpty().withMessage("El titulo es obligatorio"),
		body("description")
			.isString()
			.notEmpty()
			.withMessage("La decripcion es obligatoria"),
		body("code").isString().notEmpty().withMessage("El codigo es obligatorio"),
		body("price").isNumeric().withMessage("El precio debe de ser un numero"),
		body("stock").isNumeric().withMessage("El stock debe de ser un numero"),
		body("category")
			.isString()
			.notEmpty()
			.withMessage("La categoria debe de ser obligatoria"),
		body("thumbnails")
			.optional()
			.isArray()
			.withMessage("thumbnails debe de ser un array de stings"),
	];

	router.get("/", async (req, res) => {
		try {
			const limit = req.query.limit;
			const products = await productManager.getProducts(
				limit ? Number(limit) : null,
			);
			res.json(products);
		} catch (error) {
			res.status(500).json({ error: "Error del servidor" });
		}
	});

	router.get("/:pid", async (req, res) => {
		try {
			const product = await productManager.getProductById(
				Number(req.params.pid),
			);
			product
				? res.json(product)
				: res.status(404).json({ error: "No se encontro" });
		} catch (error) {
			res.status(500).json({ error: "Error del servidor" });
		}
	});

	router.post("/", validateProduct, async (req, res) => {
		const errors = validateResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const newProduct = await productManager.addProduct(req.body);
			res.status(201).json(newProduct);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	});
};
