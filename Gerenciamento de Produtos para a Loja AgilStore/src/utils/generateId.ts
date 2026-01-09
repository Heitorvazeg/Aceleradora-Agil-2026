import { readFile, writeFile } from "fs/promises";
import { getDataFilePath } from "../config.js";

// Caminho para o arquivo de persintência em JSON.
export const dataFilePath = getDataFilePath();

let lastId: number;

// Função de gerar id simples em memória
export async function generateId(): Promise<number> {
    if (!lastId) {
        const data = await readFile(dataFilePath, 'utf-8');
        const json = JSON.parse(data);
        lastId = Number(json.lastId);
    }

    lastId += 1;
    return lastId;
}

// Salva o último id no JSON após encerrar o programa
export async function saveLastId() {
    if (!lastId) return;

    const data = await readFile(dataFilePath, 'utf-8');
    const dataRaw = JSON.parse(data);

    dataRaw.lastId = Number(lastId);

    await writeFile(dataFilePath, JSON.stringify(dataRaw), 'utf-8');
}