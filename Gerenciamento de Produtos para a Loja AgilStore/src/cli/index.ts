import { API } from "./api.js";
import { question, close } from "./input.js";
import { isNotEmpty, isValidNumber } from "./validators.js";

async function menu() {
  console.log("\n=== GERENCIAMENTO DE PRODUTOS ===");
  console.log("1 - Adicionar produto");
  console.log("2 - Listar produtos");
  console.log("3 - Atualizar produto");
  console.log("4 - Excluir produto");
  console.log("5 - Buscar produto");
  console.log("0 - Sair");

  return question("Escolha uma opção: ");
}

async function main() {
  while (true) {
    try {
      const option = await menu();

      switch (option) {
        case "1":
          await adicionarProduto();
          break;
        case "2":
          await listarProdutos();
          break;
        case "3":
          await atualizarProduto();
          break;
        case "4":
          await excluirProduto();
          break;
        case "5":
          await buscarProduto();
          break;
        case "0":
          close();
          process.exit(0);
        default:
          console.log("❌ Opção inválida.");
      }
    } catch (err: any) {
      console.error("Erro:", err.response?.data || err.message);
    }
  }
}

main();
