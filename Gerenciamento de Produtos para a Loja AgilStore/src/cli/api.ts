import { question } from "./input.js";
import { isNotEmpty, isValidNumber } from "./validators.js";
import type { Product } from "../models/product.js";

// URL do Backend
const API = "http://localhost:3000/api/v1";

// Adicionar
export async function addProduct() {
// Questions para obter dados
  const name = await question("Nome do produto: ");
  const category = await question("Categoria: ");
  const quantity = Number(await question("Quantidade em estoque: "));
  const price = Number(await question("Preço: "));

  // Validação de número e NotEmpty
  if (
    !isNotEmpty(name) ||
    !isNotEmpty(category) ||
    !isValidNumber(quantity) ||
    !isValidNumber(price)
  ) {
    console.log("Dados inválidos.");
    return;
  }

  // Chamada API
  const response = await fetch(`${API}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, category, quantity, price }),
  });

  if (!response.ok) {
    console.log("Erro ao criar produto.");
    return;
  }

  console.log("Produto criado com sucesso!");
}

// Listar
export async function listProducts() {
  const response = await fetch(`${API}/products`, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  }
  );

  if (!response.ok) {
    console.log("Produto não encontrado!");
    return;
  }

  const products = await response.json();

  // Printa produtos em tabela.
  console.table(
    products.map((p: any) => ({
      "ID": p.id,
      "Nome": p.name,
      "Categoria": p.category,
      "Quantidade": p.quantity,
      "Preço": p.price,
    }))
  );
}

// Atualizar produto existente
export async function patchProductCli() {
  const id = (await question("ID do produto: ")).trim();

  const check = await fetch(`${API}/products/${id}`, {method: "HEAD"});

  if (!check.ok) {
    console.log("Produto não encontrado.");
    return;
  }

  const params = new URLSearchParams();
  params.append("id", id);

  // Fetch no produto salvo com filtro de id
  const responseGet = await fetch(`${API}/products/?${params.toString()}`);

  if (!responseGet.ok) {
    console.log("Erro ao buscar produto!");
    return;
  }

  const productSaved = (await responseGet.json())[0];

  // Novos campos
  const name = await question(`Nome (${productSaved.name}): `);
  const category = await question(`Categoria (${productSaved.category}): `);
  const quantityInput = await question(
    `Quantidade (${productSaved.quantity}): `
  );
  const priceInput = await question(`Preço (${productSaved.price}): `);

  const update: any = {};

  // Validações
  if (isNotEmpty(name)) update.name = name;
  if (isNotEmpty(category)) update.category = category;
  if (quantityInput && isValidNumber(Number(quantityInput)))
    update.quantity = Number(quantityInput);
  if (priceInput && isValidNumber(Number(priceInput)))
    update.price = Number(priceInput);

  if (!Object.keys(update).length) {
    console.log("Nenhuma alteração informada.");
    return;
  }

  // Chamada em Patch para atualizar os valores
  const response = await fetch(`${API}/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  });

  if (response.ok) {
    console.log("Produto atualizado com sucesso!");

  } else {
    console.log("Erro ao atualizar produto!");
    return;
  }
}

// Excluir produto
export async function deleteProductCli() {
  const id = await question("ID do produto: ");

  const check = await fetch(`${API}/products/${id}`, {method: "HEAD"});

  if (!check.ok) {
    console.log("Produto não encontrado.");
    return;
  }

  const confirm = await question("Confirmar exclusão? (s/n): ");
  if (confirm.toLowerCase() !== "s") {
    console.log("Operação cancelada.");
    return;
  }

  const response = await fetch(`${API}/products/${id}`, { method: "DELETE" });
  
  if (!response.ok) {
    console.log("Algo deu errado ao excluir produto!");
    return;
  }

  console.log("Produto excluido com sucesso!");
}

// Busca produtos por query params
export async function searchProduct() {
  const term = await question("Buscar por ID (digite 1) ou nome (digite 2): ");

  const params = new URLSearchParams();

  if (Number(term) == 1) {
    const id = await question("Qual o id do produto? ");
    params.append("id", id);

  } else if (Number(term) == 2) {
    const name = await question("Qual o nome do produto? ");
    params.append("name", name);

  } else {
    console.log("Opção invalida!");
    return;
  }

  const response = await fetch(
    `${API}/products/?${params.toString()}`
  );

  if (!response.ok) {
    console.log("Nenhum produto encontrado!");
    return;
  }

  const results = await response.json();

  // Printa o item buscado
 console.table(results);
}