import type { Product } from "../models/product.js";
import { saveProducts, deleteProduct, patchProduct, listProducts } from "../repository/productRepository.js";
import { ServiceError } from "../shared/errors.js";

// Aplica filtros como id, categoria, quantidade e preço
export async function listProductsService(id?:string, Name?:string, Category?:string, Quantity?:number,
                                        Price?:number): Promise<Product[]> {
    let listOfProducts = await listProducts();

    if (id) {
        listOfProducts = listOfProducts.filter(p => p.id === id);

    } else if (Name) {
        listOfProducts = listOfProducts.filter(p => p.Name == Name);
        
    } else {
        if (Category) {
            listOfProducts = listOfProducts.filter(p => p.id === id);
        }

        if (Quantity) {
            listOfProducts = listOfProducts.filter(p => p.Quantity === Quantity);
        }

        if (Price) {
            listOfProducts = listOfProducts.filter(p => p.Price === Price);
        }
    }

    return listOfProducts || [];
}

export async function saveProductsService() {
    
}

export async function patchProductsService(params:type) {
    
}

export async function deleteProductsService(params:type) {
    
}