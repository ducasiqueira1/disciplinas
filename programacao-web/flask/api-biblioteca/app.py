from flask import Flask, jsonify, request, abort

app = Flask(__name__)

# "Banco" em memória:
livros = [
    {"id": 1, "titulo": "Estruturas de Dados", "autor": "N. Wirth", "ano": 1976, "disponivel": True},
    {"id": 2, "titulo": "Clean Code", "autor": "R. Martin", "ano": 2008, "disponivel": True},
]

@app.get("/api/livros")
def listar_livros():
    return jsonify(livros)

@app.get("/api/livros/<int:lid>")
def obter_livro(lid):
    for item in livros:
        if item["id"] == lid:
            return jsonify(item)  # 200
    abort(404, description="Livro não encontrado")

@app.post("/api/livros")
def criar_livro():
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
    for i, item in enumerate(livros):
        if item["id"] == lid:
            livros.pop(i)
            return "", 204  # No Content
    abort(404, description="Livro não encontrado")

if __name__ == "__main__":
    app.run(debug=True)