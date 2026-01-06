import { question, close } from "./input.js";
import { isNotEmpty, isValidNumber } from "./validators.js";

const API = "http://localhost:3000/api";

// Menu
export async function menu() {
  console.log("\n=== GERENCIAMENTO DE PRODUTOS ===");
  console.log("1 - Adicionar produto");
  console.log("2 - Listar produtos");
  console.log("3 - Atualizar produto");
  console.log("4 - Excluir produto");
  console.log("5 - Buscar produto");
  console.log("0 - Sair");

  return question("Escolha uma opção: ");
}

// Adicionar
export async function adicionarProduto() {
  const name = await question("Nome do produto: ");
  const category = await question("Categoria: ");
  const quantity = Number(await question("Quantidade em estoque: "));
  const price = Number(await question("Preço: "));

  if (
    !isNotEmpty(name) ||
    !isNotEmpty(category) ||
    !isValidNumber(quantity) ||
    !isValidNumber(price)
  ) {
    console.log("Dados inválidos.");
    return;
  }

  const response = await fetch(`${API}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, category, quantity, price }),
  });

  if (!response.ok) {
    console.log("Erro ao criar produto.");
    return;
  }

  const product = await response.json();
  console.log("Produto criado: ");
  console.log(product);
}

// Listar
export async function listarProdutos() {
  const category = await question(
    "Filtrar por categoria (ENTER para ignorar): "
  );
  const order = await question(
    "Ordenar por (name | quantity | price) ou ENTER: "
  );

  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (order) params.append("order", order);

  const response = await fetch(
    `${BASE_URL}/products?${params.toString()}`
  );

  const products = await response.json();

  if (!products.length) {
    console.log("⚠️ Nenhum produto encontrado.");
    return;
  }

  console.table(
    products.map((p: any) => ({
      ID: p.id,
      Nome: p.name,
      Categoria: p.category,
      Quantidade: p.quantity,
      Preço: p.price,
    }))
  );
}

/* ================= 3. ATUALIZAR ================= */
export async function atualizarProduto() {
  const id = await question("ID do produto: ");

  const check = await fetch(`${BASE_URL}/products/${id}`);
  if (!check.ok) {
    console.log("❌ Produto não encontrado.");
    return;
  }

  const current = await check.json();
  console.log("Pressione ENTER para manter o valor atual.");

  const name = await question(`Nome (${current.name}): `);
  const category = await question(`Categoria (${current.category}): `);
  const quantityInput = await question(
    `Quantidade (${current.quantity}): `
  );
  const priceInput = await question(`Preço (${current.price}): `);

  const update: any = {};

  if (isNotEmpty(name)) update.name = name;
  if (isNotEmpty(category)) update.category = category;
  if (quantityInput && isValidNumber(Number(quantityInput)))
    update.quantity = Number(quantityInput);
  if (priceInput && isValidNumber(Number(priceInput)))
    update.price = Number(priceInput);

  if (!Object.keys(update).length) {
    console.log("⚠️ Nenhuma alteração informada.");
    return;
  }

  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  });

  const updated = await response.json();
  console.log("✏️ Produto atualizado:");
  console.log(updated);
}

/* ================= 4. EXCLUIR ================= */
export async function excluirProduto() {
  const id = await question("ID do produto: ");

  const check = await fetch(`${BASE_URL}/products/${id}`);
  if (!check.ok) {
    console.log("❌ Produto não encontrado.");
    return;
  }

  const confirm = await question("Confirmar exclusão? (s/n): ");
  if (confirm.toLowerCase() !== "s") {
    console.log("Operação cancelada.");
    return;
  }

  await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });
  console.log("🗑️ Produto removido com sucesso.");
}

/* ================= 5. BUSCAR ================= */
async function buscarProduto() {
  const term = await question("Buscar por ID ou nome: ");

  const response = await fetch(
    `${BASE_URL}/products/search?q=${term}`
  );

  const results = await response.json();

  if (!results.length) {
    console.log("⚠️ Nenhum produto encontrado.");
    return;
  }

  results.forEach((p: any) => {
    console.log("\n====================");
    console.log("ID:", p.id);
    console.log("Nome:", p.name);
    console.log("Categoria:", p.category);
    console.log("Quantidade:", p.quantity);
    console.log("Preço:", p.price);
  });
}