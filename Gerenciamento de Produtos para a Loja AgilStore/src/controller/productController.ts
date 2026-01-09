import type { Request, Response } from "express";
import { deleteProductsService, existsProductByIDService, listProductsService, patchProductsService, saveProductsService } from "../service/productService.js";

// Controler da rota GET /api/v1/products
// Trata dados de filtragem por Query Params
export async function listProductsController(req: Request, res:Response): Promise<void> {
    try {
        const id = req.query.id;
        const name = req.query.name;

        const listOfProducts = await listProductsService(Number(id), name as string);

        res.status(200).json(listOfProducts);
    }
    catch (error: any) {
        console.log(error);
        res.status(500).json({ message: "Erro ao buscar produtos!"});
    }
}

// Controler para adicionar produtos
export async function saveProductsController(req: Request, res:Response) {
    try {
        const bodyReq = req.body;

        await saveProductsService(bodyReq);

        res.status(201).json({message: "Produto criado com sucesso!"});
    }
    catch (error: any) {
        res.status(500).json({èrror: error.message});
    }
}

// Controller de atualizar produtos
export async function patchProductController(req: Request, res:Response) {
    try {
        const productUpdate = req.body;
        const id = req.params.id;

        await patchProductsService(Number(id), productUpdate);

        res.status(201).json({message: "Produto salvo com sucesso!"});
    }
    catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

// Controller para deletar produtos
export async function deleteProductController(req: Request, res:Response) {
    try {
        const id = req.params.id;

        await deleteProductsService(Number(id));

        res.status(200).json({message: "Produto deletado com sucesso!"});
    }
    catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

// Handle para ver se existe o produto
export async function existsProductByID(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const ok: boolean = await existsProductByIDService(id);

        if (ok) {
            res.sendStatus(200);
            return;
        }

        res.sendStatus(404);
    }
    catch (error: any) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}