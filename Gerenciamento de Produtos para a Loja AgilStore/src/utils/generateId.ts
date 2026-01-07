import { readFile, writeFile } from "fs/promises";
import { dataFilePath } from "../repository/productRepository.js";

let lastId: number;

// Função de gerar id simples em memória
export async function generateId(): Promise<string> {
    if (!lastId) {
        const data = await readFile(dataFilePath, 'utf-8');
        const json = JSON.parse(data);
        lastId = Number(json.lastId);
    }

    lastId += 1;
    return lastId.toString();
}

// Salva o último id no JSON após encerrar o programa
export async function saveLastId() {
    const data = await readFile(dataFilePath, 'utf-8');
    const dataRaw = JSON.parse(data);

    if (!lastId) {
        const data = await readFile(dataFilePath, 'utf-8');
        const json = JSON.parse(data);
        lastId = Number(json.lastId);
    }

    dataRaw.lastId = lastId;

    await writeFile(dataFilePath, JSON.stringify(dataRaw), 'utf-8');
}