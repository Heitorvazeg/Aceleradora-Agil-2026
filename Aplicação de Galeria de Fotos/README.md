# 📸 Galeria de Fotos

## 📌 Projeto
Este projeto consiste em uma **Galeria de Fotos interativa**, desenvolvida como uma aplicação frontend, que permite ao usuário visualizar e pesquisar fotos por meio de uma **barra de busca em tempo real**.

A aplicação apresenta um layout organizado com **cabeçalho, barra de busca, grid de fotos e rodapé**, seguindo boas práticas de usabilidade, responsividade e componentização.  
Ao digitar uma palavra-chave, as fotos são filtradas dinamicamente com base no **nome da imagem**.

---

## 📂 Estrutura de Pastas
A estrutura do projeto segue uma organização modular, facilitando manutenção e escalabilidade:

```text
src/
├── assets/     # Imagens e ícones da aplicação
│ └── icons/    # Icones
├── components/
│ ├── bar/      # Barra de busca
│ ├── body/     # Área principal (grid de fotos)
│ │ └── photo/  # Componente individual de foto
│ ├── context/  # Context API (filtro de busca)
│ ├── footer/   # Rodapé
│ └── header/   # Cabeçalho
├── App.jsx     # Componente raiz
├── main.jsx    # Ponto de entrada da aplicação
└── index.css   # Estilos globais
```
---

## 🛠️ Tecnologias
As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- **React.js** — Criação de componentes reutilizáveis
- **JavaScript (ES6+)**
- **CSS3** — Grid layout, responsividade e efeitos visuais
- **Context API** — Gerenciamento de estado global (filtro de busca)
- **Vite** — Ambiente de desenvolvimento rápido
- **Font Awesome** — Ícone da lupa na barra de busca

---

## ▶️ Como Rodar
Para executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos
- Node.js instalado (versão 18 ou superior recomendada)
- Gerenciador de pacotes (`npm`)

### Passos
```bash
# Clone o repositório
git clone https://github.com/Heitorvazeg/Aceleradora-Agil-2026.git

# Acesse a pasta do projeto
cd "./Aceleradora-Agil-2026/Aplicação de Galeria de Fotos"

# Instale as dependências
npm install

# Execute a aplicação
npm run dev

# Após isso, acesse o navegador: http://localhost:5173
```
## 🔮 Projeções Futuras

- Integração com API pública de fotos (Unsplash, Pexels, etc.)
- Paginação ou carregamento infinito
- Modal para visualização ampliada da foto
- Testes automatizados

---

## 👤 Autor

**Heitor Vaz**  
Projeto desenvolvido para o programa **Aceleradora Ágil — 2026/1**