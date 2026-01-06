import type { Request, Response } from "express";
import { listProductsService } from "../service/product.js";

export async function listProductsController(req: Request, res:Response): Promise<void> {
    try {
        const id = req.query.id;
        const category = req.query.category;
        const quantity = req.query.quantity;
        const price = req.query.price;

        const listOfProducts = await listProductsService(id as string,
            category as string, Number(quantity), Number(price));

        res.status(200).json(listOfProducts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao buscar produtos!"});
    }
}

export async function saveProductsController(req: Request, res:Response) {
    
}

export async function patchProductController(req: Request, res:Response) {
    
}

export async function deleteProductController(req: Request, res:Response) {
    
}