import type { Product } from "../models/product.js";
import { saveProducts, deleteProduct, patchProduct, listProducts, idExists, findByName } from "../repository/productRepository.js";
import { ServiceError } from "../shared/errors.js";
import { generateId } from "../utils/generateId.js";

// Aplica filtros como id, categoria, quantidade e preço
export async function listProductsService(id?:string, Name?:string): Promise<Product[]> {
    let listOfProducts = await listProducts();

    if (id) {
        listOfProducts = listOfProducts.filter(p => p.id === id);

    } else if (Name) {
        listOfProducts = listOfProducts.filter(p => p.Name == Name);
        
    }

    return listOfProducts || [];
}

// Service de salvar produtos
export async function saveProductsService(product: Product) {
    // não permite produto duplicado
    const alreadyExists = await findByName(product.Name);
    if (alreadyExists) {
        throw new ServiceError("Produto já existe");
    }

    // Gera id incremental baseado no salvo no JSON
    product.id = await generateId();

    await saveProducts(product);
    return;
}

// Servide de atualizar produtos
export async function patchProductsService(id:string, updates: Partial<Product>) {
    if (updates.Price && updates.Price < 0) {
        throw new ServiceError("Preço inválido");
    }

    if (updates.Quantity && updates.Quantity < 0) {
        throw new ServiceError("Estoque não pode ser negativo");
    }

    await patchProduct(id, updates);
    return;
}

// Service de deletar produtos
export async function deleteProductsService(id: string) {
    await deleteProduct(id);
    return;
}

// Service para ver se existe o produto por ID
export async function existsProductByIDService(id?:string): Promise<boolean> {
    if (!id) return false;
    const ok: boolean = await idExists(id);

    return ok;
}