# Passo a Passo para Criar um Repositório de Portfólio com React no GitHub

## 1. Criar o Projeto React
Se ainda não tem o Node.js instalado, baixe e instale em: [https://nodejs.org/](https://nodejs.org/)

Depois, no terminal:
```bash
npx create-react-app meu-portifolio
cd meu-portifolio
```

---

## 2. Configurar o GitHub
1. No GitHub, crie um repositório chamado `meu-portifolio`
2. No terminal, dentro da pasta do projeto, rode:

```bash
git init
git remote add origin https://github.com/RuthMira/meu-portifolio.git
```

---

## 3. Criar Arquivos para Buscar Repositórios

### 📌 Criar `src/api/github.js`
```javascript
const GITHUB_USERNAME = "RuthMira";
export async function fetchRepos() {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    return response.json();
}
```

### 📌 Criar `src/components/ReposList.js`
```javascript
import React, { useEffect, useState } from "react";
import { fetchRepos } from "../api/github";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetchRepos().then(setRepos);
    }, []);

    return (
        <div>
            <h2>Meus Repositórios</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ReposList;
```

### 📌 Editar `src/App.js`
```javascript
import React from "react";
import ReposList from "./components/ReposList";

function App() {
    return (
        <div>
            <h1>Meu Portfólio</h1>
            <ReposList />
        </div>
    );
}
export default App;
```

---

## 4. Rodar o Projeto Localmente
Instalar dependências e rodar:
```bash
npm install
npm start
```
Se tudo estiver certo, a página abrirá no navegador.

---

## 5. Enviar para o GitHub
```bash
git add .
git commit -m "Criando portfólio com React"
git branch -M main
git push -u origin main
```

---

## 6. Publicar no GitHub Pages
Adicionar ao `package.json`:
```json
"homepage": "https://RuthMira.github.io/meu-portifolio",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```
Instalar `gh-pages` e publicar:
```bash
npm install gh-pages --save-dev
npm run deploy
```
Seu portfólio estará disponível em:
```
https://RuthMira.github.io/meu-portifolio
```

---

Agora seu portfólio está pronto! 🚀

