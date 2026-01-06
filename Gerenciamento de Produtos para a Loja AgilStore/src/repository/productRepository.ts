import { readFile, writeFile } from "fs/promises";
import type { Product, ProductData }from "../models/product.js";
import { RepositoryError } from "../shared/errors.js";

// Caminho para o arquivo de persintência em JSON.
const dataFilePath = "../long_term_data.json"

// Pega os produtos do arquivo long_term_data.json
export async function listProducts(): Promise<Product[]> {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);
        return json.products || [];
    }
    catch (error) {
        throw new RepositoryError();
    }
};

// Salva novos produtos no arquivo long_term_data.json
export async function saveProducts(products: Product[]) {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);
        json.products.push(...products);

        await writeFile(dataFilePath, JSON.stringify(json));
    }
    catch (error) {
        throw new RepositoryError();
    }
};

// Atualiza dados de produtos em long_term_data.json
export async function patchProduct(id: string, updates: Partial<Product>) {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);

        const index = json.products.findIndex(p => p.id === id);

        if (!json.products[index]) throw new RepositoryError();

        json.products[index] = {
            ...json.products[index],
            ...updates
        }

        await writeFile(dataFilePath, JSON.stringify(json));
    }
    catch (error) {
        throw new RepositoryError();
    }
}

// Deleta produtos antigos de long_term_data.json
export async function deleteProduct(id:string) {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);

        json.products = json.products.filter(p => p.id != id);

        await writeFile(dataFilePath, JSON.stringify(json));
    }
    catch (error) {
        throw new RepositoryError();
    }
}

// Vê se o id existe. Caso exista, pode passar para as outras funções
export async function idExists(id: string): Promise<boolean> {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);

        const index = json.products.findIndex(p => p.id == id);

        if (index == -1) return false;
        else return true;
    }
    catch (error) {
        throw new RepositoryError();
    }
}