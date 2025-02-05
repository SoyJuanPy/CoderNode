import { readFile } from "fs/promises";

const path = "./src/data/carts.json";

import { ProductManager } from "./ProductManager.js";

const productManager = new ProductManager();

export class CartManager {
	async getCart(cid) {
		try {
			const data = await readFile(path, "utf-8");
			const carts = JSON.parse(data);
			return carts.find((cart) => cart.id === cid) || null;
		} catch (error) {
			console.error(`Error al obtener el carrito: ${error}`);
			return null;
		}
	}
	async addProductToCart(cid, pid) {
		try {
			const data = await readFile(path, "utf-8");
			const carts = JSON.parse(data);
			let cart = carts.find((cart) => card.id == pid);

			const productExists = await productManager.getProductById(pid);
			if (!productExists) {
				throw new Error("El producto no existe");
			}
			if (!cart) {
				cart = { id: cid, products: [] };
				cart.push(cart);
			}

			const productIndex = cart.products.findIndex((p) => p.product == pid);
			if (productIndex != -1) {
				cart.products[productIndex].quantity++;
			} else {
				cart.products.push({ product: pid, quantity: 1 });
			}

			await writeFile(path, JSON.stringify(carts, null, 2));
			return cart;
		} catch (error) {
			console.error(`Error al agregar el producto al carrito: ${error}`);
			throw error;
		}
	}
}
