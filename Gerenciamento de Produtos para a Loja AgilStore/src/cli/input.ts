import readline from "readline";

// Interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para obter dados do usuário
export function question(text: string): Promise<string> {
  return new Promise((resolve) => rl.question(text, resolve));
}

// Fecha a conexão
export function close() {
  rl.close();
}
