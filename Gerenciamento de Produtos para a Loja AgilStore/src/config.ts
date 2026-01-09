// src/config.ts
import dotenv from "dotenv";
import path from "path";

// Força o carregamento na raiz do projeto
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});


// Função para pegar o caminho do DATA_FILE_PATH
export function getDataFilePath(): string {
  const envPath = process.env.DATA_FILE_PATH;

  // Valida a variavel do .env
  if (!envPath) {
    throw new Error("DATA_FILE_PATH não está definido no .env");
  }

  return envPath;
}
