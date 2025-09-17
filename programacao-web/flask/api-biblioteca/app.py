from flask import Flask, jsonify, request, abort
from flasgger import Swagger

app = Flask(__name__)
swagger = Swagger(app)

# "Banco" em memória:
livros = [
    {"id": 1, "titulo": "Estruturas de Dados", "autor": "N. Wirth", "ano": 1976, "disponivel": True},
    {"id": 2, "titulo": "Clean Code", "autor": "R. Martin", "ano": 2008, "disponivel": True},
]

@app.get("/api/livros")
def listar_livros():
    """
    Lista todos os livros
    ---
    responses:
      200:
        description: Lista de livros disponíveis
        examples:
          application/json: [{"id":1,"titulo":"Estruturas de Dados","autor":"N. Wirth","ano":1976,"disponivel":true}]
    """
    return jsonify(livros)

@app.get("/api/livros/<int:lid>")
def obter_livro(lid):
    """
    Obtém um livro pelo ID
    ---
    parameters:
      - name: lid
        in: path
        type: integer
        required: true
        description: ID do livro
    responses:
      200:
        description: Livro encontrado
      404:
        description: Livro não encontrado
    """
    for item in livros:
        if item["id"] == lid:
            return jsonify(item)  # 200
    abort(404, description="Livro não encontrado")

@app.post("/api/livros")
def criar_livro():
    """
    Cria um novo livro
    ---
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          properties:
            titulo:
              type: string
            autor:
              type: string
            ano:
              type: integer
            disponivel:
              type: boolean
          required: [titulo, autor, ano]
    responses:
      201:
        description: Livro criado
    """
    data = request.get_json(force=True) or {}
    obrig = ["titulo", "autor", "ano"]
    if not all(k in data for k in obrig):
        abort(400, description="Campos obrigatórios: titulo, autor, ano")

    novo_id = (max([x["id"] for x in livros]) + 1) if livros else 1
    item = {
        "id": novo_id,
        "titulo": str(data["titulo"]).strip(),
        "autor": str(data["autor"]).strip(),
        "ano": int(data["ano"]),
        "disponivel": bool(data.get("disponivel", True)),
    }
    livros.append(item)
    return jsonify(item), 201

@app.delete("/api/livros/<int:lid>")
def remover_livro(lid):
    """
    Remove um livro pelo ID
    ---
    parameters:
      - name: lid
        in: path
        type: integer
        required: true
        description: ID do livro
    responses:
      204:
        description: Livro removido com sucesso
      404:
        description: Livro não encontrado
    """
    for i, item in enumerate(livros):
        if item["id"] == lid:
            livros.pop(i)
            return "", 204  # No Content
    abort(404, description="Livro não encontrado")

@app.patch("/api/livros/<int:lid>/disponibilidade")
def atualizar_disponibilidade(lid):
    """
    Atualiza a disponibilidade de um livro
    ---
    parameters:
      - name: lid
        in: path
        type: integer
        required: true
        description: ID do livro
      - in: body
        name: body
        required: true
        schema:
          type: object
          properties:
            disponivel:
              type: boolean
          required: [disponivel]
    responses:
      200:
        description: Disponibilidade atualizada
      400:
        description: Campo 'disponivel' ausente
      404:
        description: Livro não encontrado
    """
    data = request.get_json(force=True) or {}
    if "disponivel" not in data:
        abort(400, description="Campo obrigatório: disponivel (True/False)")

    for item in livros:
        if item["id"] == lid:
            item["disponivel"] = bool(data["disponivel"])
            return jsonify(item)  # 200
    abort(404, description="Livro não encontrado")

if __name__ == "__main__":
    app.run(debug=True)
