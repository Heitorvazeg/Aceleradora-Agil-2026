import type { Product } from "../models/product.js";
import { saveProducts, deleteProduct, patchProduct, listProducts, idExists, findByName } from "../repository/productRepository.js";
import { ServiceError } from "../shared/errors.js";
import { generateId } from "../utils/generateId.js";
import { normalizeString } from "../utils/normalize.js";

// Aplica filtros como id, categoria, quantidade e preço
export async function listProductsService(id?:number, Name?:string): Promise<Product[]> {
    let listOfProducts = await listProducts();

    if (id) {
        listOfProducts = listOfProducts.filter(p => p.id === id);

    } else if (Name) {
        listOfProducts = listOfProducts.filter(p => p.name === Name);
        
    }

    if (listOfProducts.length === 0) throw new Error("Produto nao encontrado!");

    return listOfProducts;
}

// Service de salvar produtos
export async function saveProductsService(product: Product) {
    // não permite produto duplicado
    const name = normalizeString(product.name as string);
    const alreadyExists = await findByName(name);
    console.log(alreadyExists);
    if (alreadyExists) {
        throw new ServiceError("Produto já existe");
    }

    // Gera id incremental baseado no salvo no JSON
    product.id = await generateId();

    await saveProducts(product);
    return;
}

// Servide de atualizar produtos
export async function patchProductsService(id:number, updates: Partial<Product>) {
    if (updates.price && updates.price < 0) {
        throw new ServiceError("Preço inválido");
    }

    if (updates.quantity && updates.quantity < 0) {
        throw new ServiceError("Estoque não pode ser negativo");
    }

    await patchProduct(Number(id), updates);
    return;
}

// Service de deletar produtos
export async function deleteProductsService(id: number) {
    await deleteProduct(Number(id));
    return;
}

// Service para ver se existe o produto por ID
export async function existsProductByIDService(id?:string): Promise<boolean> {
    if (!id) return false;
    const ok: boolean = await idExists(Number(id));

    return ok;
}