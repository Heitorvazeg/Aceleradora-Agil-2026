import { readFile, writeFile } from "fs/promises";
import type { Product, ProductData }from "../models/product.js";
import { RepositoryError } from "../shared/errors.js";
import { getDataFilePath } from "../config.js";
import { normalizeString } from "../utils/normalize.js";

// Caminho para o arquivo de persintência em JSON.
export const dataFilePath = getDataFilePath();

// Pega os produtos do arquivo long_term_data.json
export async function listProducts(): Promise<Product[]> {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);
        return json.products;
    }
    catch (error) {
        console.log("Repository Error: ", error);
        throw new RepositoryError();
    }
};

// Salva novos produtos no arquivo long_term_data.json
export async function saveProducts(product: Product) {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);
        
        json.products = json.products ?? [];
        json.products.push(product);

        await writeFile(dataFilePath, JSON.stringify(json));
    }
    catch (error) {
        console.log("Repository Error: ", error);
        throw new RepositoryError();
    }
};

// Atualiza dados de produtos em long_term_data.json
export async function patchProduct(id: number, updates: Partial<Product>) {
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
        console.log("Repository Error: ", error);
        throw new RepositoryError();
    }
}

// Deleta produtos antigos de long_term_data.json
export async function deleteProduct(id:number) {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);

        json.products = json.products.filter(p => p.id != id);

        await writeFile(dataFilePath, JSON.stringify(json));
    }
    catch (error) {
        console.log("Repository Error: ", error);
        throw new RepositoryError();
    }
}

// Vê se o id existe. Caso exista, pode passar para as outras funções
export async function idExists(id: number): Promise<boolean> {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);

        const index = json.products.findIndex(p => p.id == id);

        if (index == -1) return false;
        else return true;
    }
    catch (error) {
        console.log("Repository Error: ", error);
        throw new RepositoryError();
    }
}

export async function findByName(name: string): Promise<boolean> {
    try {
        const data = await readFile(dataFilePath, 'utf-8');
        const json: ProductData = JSON.parse(data);

        return json.products.some(p => normalizeString(p.name) === name);
    }
    catch (error) {
        console.log("Repository Error: ", error);
        throw new RepositoryError();
    }
}