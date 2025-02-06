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
		body("price")
			.isNumeric()
			.withMessage("El precio debe ser un número.")
			.custom((value) => value > 0)
			.withMessage("El precio debe ser mayor a 0."),
		body("stock")
			.isNumeric()
			.withMessage("El stock debe ser un número.")
			.custom((value) => value >= 0)
			.withMessage("El stock no puede ser negativo."),
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
			if (limit && isNaN(Number(limit))) {
				return res
					.status(400)
					.json({ error: "El parámetro 'limit' debe ser un número." });
			}
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
			if (!product) {
				return res
					.status(404)
					.json({ error: "Producto no encontrado con el ID proporcionado." });
			}
			res.json(product);
		} catch (error) {
			res.status(500).json({ error: "Error interno del servidor" });
		}
	});

	router.post("/", validateProduct, async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log(errors.array());
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const product = req.body;
			const addedProduct = await productManager.addProduct(product);
			res.status(201).json(addedProduct);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Error al agregar el producto" });
		}
	});

	return router;
};
