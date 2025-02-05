import { readFile } from "fs/promises";
const path = "./src/data/productos.json";

export class ProductManager {
	async getProducts(limit) {
		try {
			const data = await readFile(path, "utf-8");
			const products = JSON.parse(data);
			return limit ? products.slice(0, limit) : products;
		} catch (error) {
			console.error("Error al obtener productos:", error);
			return [];
		}
	}

	async getProductById(pid) {
		try {
			const data = await readFile(path, "utf-8");
			const products = JSON.parse(data);
			return products.find((p) => p.id === pid) || null;
		} catch (error) {
			console.error("Error al obtener producto:", error);
			return null;
		}
	}

	async addProduct(product) {
		try {
			const data = await readFile(path, "utf-8");
			const products = JSON.parse(data);

			if (products.some((p) => p.code === product.code)) {
				throw new Error("El código de producto ya existe.");
			}

			product.id = products.length ? products[products.length - 1].id + 1 : 1;
			product.status = product.status ?? true;
			products.push(product);

			await writeFile(path, JSON.stringify(products, null, 2));
			return product;
		} catch (error) {
			console.error("Error al agregar producto:", error);
			throw error;
		}
	}
}
