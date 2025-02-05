import express from "express";
import { body, validationResult } from "express-validator";
import { ProductManager } from "../models/ProductManager.js";

export const products = () => {
	const router = express.Router();
	const productManager = new ProductManager();

	const validateProduct = [
		body("title")
			.isString()
			.notEmpty()
			.withMessage("El título es obligatorio."),
		body("description")
			.isString()
			.notEmpty()
			.withMessage("La descripción es obligatoria."),
		body("code").isString().notEmpty().withMessage("El código es obligatorio."),
		body("price").isNumeric().withMessage("El precio debe ser un número."),
		body("stock").isNumeric().withMessage("El stock debe ser un número."),
		body("category")
			.isString()
			.notEmpty()
			.withMessage("La categoría es obligatoria."),
		body("thumbnails")
			.optional()
			.isArray()
			.withMessage("Thumbnails debe ser un array de strings."),
	];

	router.get("/", async (req, res) => {
		try {
			const limit = req.query.limit;
			const products = await productManager.getProducts(
				limit ? Number(limit) : null,
			);
			res.json(products);
		} catch (error) {
			res.status(500).json({ error: "Error interno del servidor" });
		}
	});

	router.get("/:pid", async (req, res) => {
		try {
			const product = await productManager.getProductById(
				Number(req.params.pid),
			);
			product
				? res.json(product)
				: res.status(404).json({ error: "Producto no encontrado" });
		} catch (error) {
			res.status(500).json({ error: "Error interno del servidor" });
		}
	});

	router.post("/", validateProduct, async (req, res) => {
		const errors = validationResult(req);
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

	return router;
};
