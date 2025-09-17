# 📚 API de Livros com Flask e Flasgger

Este projeto exemplifica a construção de uma **API REST** utilizando o microframework **Flask (Python)**, com documentação interativa integrada via **Flasgger (Swagger UI)**.  
Foi desenvolvido como material didático para a disciplina **Programação Web** (Curso Técnico em Desenvolvimento de Sistemas Educacionais - IFB).

---

## 🎯 Objetivos didáticos

- Demonstrar os conceitos fundamentais de uma **API REST**:
  - Recursos (livros)
  - Identificação por meio de URIs
  - Operações CRUD (Create, Read, Update, Delete)
  - Utilização de diferentes métodos HTTP (`GET`, `POST`, `DELETE`, `PATCH`)
- Aplicar boas práticas de desenvolvimento em Flask.
- Introduzir a documentação automática de APIs com **Swagger UI**.
- Preparar o terreno para a integração futura com **bancos de dados**.

---

## 🧩 Estrutura da API

O recurso central é o **livro**, representado por um objeto JSON com os campos:

```json
{
  "id": 1,
  "titulo": "Estruturas de Dados",
  "autor": "N. Wirth",
  "ano": 1976,
  "disponivel": true
}
```

### Endpoints implementados

| Método | Endpoint                                | Descrição                                    |
|--------|-----------------------------------------|----------------------------------------------|
| GET    | `/api/livros`                          | Lista todos os livros                        |
| GET    | `/api/livros/<id>`                     | Retorna os dados de um livro específico      |
| POST   | `/api/livros`                          | Cria um novo livro                           |
| DELETE | `/api/livros/<id>`                     | Remove um livro pelo ID                      |
| PATCH  | `/api/livros/<id>/disponibilidade`     | Atualiza apenas a disponibilidade do livro   |

---

## 🛠️ Requisitos técnicos

- **Python 3.8+**
- Bibliotecas:
  ```bash
  pip install flask flasgger
  ```

---

## ▶️ Como executar

1. Salve o arquivo `app.py` em um diretório local.
2. No terminal, execute:
   ```bash
   python app.py
   ```
3. A API ficará disponível em:
   - [http://127.0.0.1:5000/api/livros](http://127.0.0.1:5000/api/livros)
4. A documentação interativa pode ser acessada em:
   - [http://127.0.0.1:5000/apidocs](http://127.0.0.1:5000/apidocs)

---

## 📖 Exemplos de requisições

### Criar livro (POST)
```bash
curl -X POST http://127.0.0.1:5000/api/livros \
     -H "Content-Type: application/json" \
     -d '{"titulo": "Python Fluente", "autor": "L. Ramalho", "ano": 2015}'
```

### Atualizar disponibilidade (PATCH)
```bash
curl -X PATCH http://127.0.0.1:5000/api/livros/2/disponibilidade \
     -H "Content-Type: application/json" \
     -d '{"disponivel": false}'
```

### Deletar livro (DELETE)
```bash
curl -X DELETE http://127.0.0.1:5000/api/livros/1
```

---

✍️ **Produzido para fins didáticos** no âmbito da disciplina de **Programação Web**.