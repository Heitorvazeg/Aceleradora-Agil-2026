import { listProductsController, saveProductsController, patchProductController,
        deleteProductController,
        existsProductByID} from "./controller/productController.js";
import { Router } from "express";

const routes = Router();

// Rotas da API utilizando Router
routes.get("/products", listProductsController);
routes.head("/products/:id", existsProductByID);

routes.post("/products", saveProductsController);

routes.delete("/products/:id", deleteProductController);
routes.patch("/products/:id", patchProductController);

export { routes };