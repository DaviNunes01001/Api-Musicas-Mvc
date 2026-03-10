# API de Músicas — Node.js + Express (MVC)

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)

## Sobre o projeto

Este projeto foi desenvolvido como exercício prático de backend com Node.js e Express.

A proposta da atividade era refatorar uma API que estava inteira dentro de um único arquivo (`app.js`) e reorganizar o código utilizando o padrão **MVC (Model–View–Controller)**.

**Por que MVC?**
Antes da refatoração, toda a lógica estava concentrada em um único arquivo — rotas, regras e dados misturados. MVC resolve isso separando responsabilidades em camadas independentes, facilitando a manutenção e leitura do código conforme o projeto cresce.

> ⚠️ Os dados são armazenados em memória (array `musicas` no Model), ou seja, são perdidos ao reiniciar o servidor. A implementação tem foco didático.

---

## Tecnologias

- Node.js
- Express.js
- JavaScript (CommonJS)

---

## Estrutura do projeto

```
Api-Musicas-Mvc
│
├── src
│   ├── Controllers
│   │   └── musicasControllers.js
│   ├── Models
│   │   └── musicasModels.js
│   └── Routers
│       └── musicasRouters.js
│
├── appMvc.js
└── package.json
```

---

## Arquitetura MVC

| Camada | Responsabilidade |
|---|---|
| **Model** | Armazena os dados em um array e expõe funções para manipulá-los |
| **Controller** | Recebe a requisição, chama o Model e devolve a resposta HTTP |
| **Router** | Define os endpoints e conecta cada rota ao controller correto |

**Fluxo:**
```
Cliente → Router → Controller → Model → Response
```

---

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | `/musicas` | Lista todas as músicas |
| GET | `/musicas/:nomemusica` | Busca uma música pelo nome |
| POST | `/musicas` | Cria uma nova música |
| PUT | `/musicas/:id` | Atualiza uma música |
| DELETE | `/musicas/:id` | Remove uma música |

**Exemplo de body (POST/PUT):**
```json
{
  "nomeMusic": "Rolling in the Deep",
  "autor": "Adele",
  "email": "adele@music.com",
  "DtLanca_music": "2011-01-01"
}
```

---

## Como executar

```bash
# Clonar o repositório
git clone https://github.com/DaviNunes01001/Api-Musicas-Mvc.git

# Instalar dependências
npm install

# Rodar o servidor
node appMvc.js
```

Servidor disponível em `http://localhost:3000`

---

## O que aprendi

Neste projeto coloquei em prática como separar responsabilidades numa API REST e entendi por que isso importa quando o projeto começa a crescer. A refatoração deixou claro como um código desorganizado pode funcionar, mas se torna difícil de manter — e como MVC resolve isso de forma simples e escalável.
