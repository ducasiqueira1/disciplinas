var nome    = document.getElementById("nome");
var pontos  = document.getElementById("pontos");
var equipe  = document.getElementById("equipe");
var pais    = document.getElementById("pais");
var numero  = document.getElementById("numero");
var imagem  = document.getElementById("imagem");

var indice = 1;

const carregar_dados = async () => {
    const APIResponse = await fetch('pilotos.json');

    if (APIResponse.status === 200) {
         const dt = await APIResponse.json();
         return dt;
    }
}

const carregar_piloto = async (index) =>{  
    var ppos  = data[index]["pos"];
    var pnome = data[index]["nome"];
    var pimagem = data[index]["imagem"];
    var ppontos = data[index]["pontos"];
    var pnumero = data[index]["numero"];
    var ppais = data[index]["pais"];
    var pequipe = data[index]["equipe"];    

    imagem.src = pimagem;    
    nome.innerHTML = `${ppos} - ${pnome}`;
    pontos.innerHTML = `${ppontos} pts`;
    numero.innerHTML = pnumero;
    pais.innerHTML = ppais;
    equipe.innerHTML = pequipe;
}

document.getElementById("btn-ant").addEventListener('click', () => {
    indice--;

    if (indice < 0 ){
        indice = data.length - 1;
    }

    carregar_piloto(indice);
});

document.getElementById("btn-prox").addEventListener('click', () => {
    indice++;

    if (indice > data.length - 1 ){
        indice = 0;
    }

    carregar_piloto(indice);
});

//const data = carregar_dados();

//console.log(data);

carregar_piloto(0);