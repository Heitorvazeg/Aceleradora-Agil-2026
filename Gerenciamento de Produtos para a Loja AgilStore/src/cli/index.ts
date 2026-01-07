import { addProduct, listProducts, deleteProductCli, patchProductCli, searchProduct } from "./api.js";
import { question, close } from "./input.js";

// Menu de opções
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
          await addProduct();
          break;
        case "2":
          await listProducts();
          break;
        case "3":
          await patchProductCli();
          break;
        case "4":
          await deleteProductCli();
          break;
        case "5":
          await searchProduct();
          break;
        case "0":
          close();
          process.exit(0);
        default:
          console.log("Opção inválida.");
      }
    } catch (err: any) {
      console.error("Erro:", err.response?.data || err.message);
    }
  }
}

main();