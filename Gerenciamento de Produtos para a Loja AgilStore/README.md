# 📦 Backend de Gerenciamento de Produtos  
## Aceleradora Ágil — Turma 2026/1

Este projeto consiste em uma **aplicação backend desenvolvida em Node.js com TypeScript**, criada para o programa **Aceleradora Ágil 2026/1**, com o objetivo de **automatizar a gestão de inventário de produtos**.

A aplicação oferece operações completas de **CRUD (Create, Read, Update e Delete)**, permitindo o gerenciamento eficiente de produtos e servindo como base para evoluções futuras.

---

## 🎯 Objetivo do Projeto

Desenvolver um backend modular, organizado e escalável que permita:

- Adicionar novos produtos ao inventário  
- Listar produtos cadastrados com opções de filtragem  
- Atualizar informações de produtos existentes  
- Remover produtos obsoletos  

---

## 🧱 Arquitetura

O projeto segue uma arquitetura em **camadas**, separando responsabilidades e facilitando manutenção e evolução do código.

### Camadas da Aplicação

- **CLI**
  Responsável pela interação com o sistema Backend através de requisições HTTP com Fetch.

- **Controller**  
  Responsável pelo tratamento inicial das requisições e pela comunicação com a camada de serviço.

- **Service**  
  Contém as regras de negócio e validações da aplicação.

- **Repository**  
  Responsável pela persistência de dados, utilizando arquivos JSON como armazenamento inicial.

---

## 🔀 Fluxo da Aplicação

1. O usuário solicita uma operação via CLI  
2. A requisição é direcionada para a rota correspondente  
3. A rota chama o **Controller**  
4. O Controller delega a lógica para o **Service**  
5. O Service acessa os dados por meio do **Repository**  
6. O resultado é retornado ao usuário via CLI  

---

## 🌐 Rotas Disponíveis

- **GET /api/v1/products**  
  Retorna os produtos cadastrados no sistema  
  Suporte a Query Params de busca filtradas

- **HEAD /api/v1/products/:id**
  Retorna se o produto existe no sistema.

- **POST /api/v1/products**  
  Adiciona um novo produto ao sistema  

- **PATCH /api/v1/products/:id**  
  Atualiza informações de um produto já cadastrado  

- **DELETE /api/v1/products/:id**  
  Remove um produto obsoleto do sistema  

---

## ▶️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm

### Passos para execução

1. Clone o repositório:
git clone https://github.com/Heitorvazeg/Aceleradora-Agil-2026.git

2. Acesse o diretório do projeto:
cd Aceleradora-Agil-2026

3. Instale as dependências:
npm install

4. Gere o build do projeto:
npm run build

5. Inicie o servidor:
npm run start-server

6. Em outro terminal, navegue para a pasta do projeto:
cd "./Gerenciamento de Produtos para a Loja AgilStore"

7. Inicie a interface **CLI**:
npm run start-cli

8. Navegue pela **CLI** e explore as possibilidade.

---

## 🔮 Projeções Futuras

- Integração com banco de dados relacional ou NoSQL
- Criação de uma interface web para interação com o sistema
- Melhoria em perfomance e Segurança do fluxo
- Autenticação e controle de acesso  
- Testes automatizados

---

## 👤 Autor

**Heitor Vaz**  
Projeto desenvolvido para o programa **Aceleradora Ágil — 2026/1**
