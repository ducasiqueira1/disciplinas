from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Exemplo de dados (substitua por sua lógica de banco de dados/backend)
users = {"maiara": "senha123"}
projects_data = [
    {"id": 1, "name": "Desenvolvimento App Mobile", "support_text": "Foco na usabilidade e performance."},
    {"id": 2, "name": "Revisão de Design Web", "support_text": "Atualização da identidade visual."},
]
project_status_example = {
    "name": "Projeto Alpha",
    "support_text": "Detalhes sobre o andamento do Projeto Alpha.",
    "current_status_index": 2 # 0: aguardando, 1: aprovado, 2: em execução, 3: finalizado
}


@app.route('/')
def home():
    # Redireciona para a tela de login se não estiver logado,
    # ou para a lista de projetos se estiver.
    # Implemente a lógica de sessão aqui.
    return redirect('/login')

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        # Lógica de autenticação simples (NÃO USE EM PRODUÇÃO)
        if users.get(username) == password:
            # Lógica de login bem-sucedido (ex: criar sessão)
            return redirect(url_for('mostrar_seus_projetos'))
        else:
            # Lógica de falha no login
            return render_template('login.html', error="Usuário ou senha inválidos")
    return render_template('login.html')

@app.route('/seus-projetos')
def mostrar_seus_projetos():
    # Aqui você carregaria os projetos do usuário logado
    # No exemplo, estou passando dados fixos.
    # Adapte "Maiara" para vir do usuário logado.
    return render_template('seus_projetos.html', username="Maiara", projects=projects_data)

@app.route('/situacao-projeto/<int:project_id>') # Exemplo de rota para um projeto específico
def mostrar_situacao_projeto(project_id):
    # Aqui você carregaria os dados do projeto específico e seu status
    # No exemplo, estou passando dados fixos.
    # Adapte "Maiara" para vir do usuário logado.
    # Você pode querer buscar o project_status_example com base no project_id
    return render_template('situacao_projeto.html', username="Maiara", project=project_status_example)

if __name__ == '__main__':
    app.run(debug=True)