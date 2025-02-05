import express from "express";
import { products } from "./routes/products.js";
import { cart } from "./routes/cart.js";

const app = express();
app.use(express.json());

app.use("/api/products", products);
app.use("/api/carts", cart);

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`El servidor esta en http://localhost:${PORT}`);
});
