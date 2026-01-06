import { listProductsController, saveProductsController, patchProductController,
        deleteProductController} from "./controller/productController.js";
import { Router } from "express";

const routes = Router();

// Rotas da API utilizando Router
routes.get("/products", listProductsController);
routes.post("/products", saveProductsController);
routes.delete("/products", deleteProductController);
routes.patch("/products", patchProductController);

export { routes };