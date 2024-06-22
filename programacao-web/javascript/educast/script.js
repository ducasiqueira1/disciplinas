let episodios = [
    {titulo:'Sinapse #89 - Estamos Perto da Fusão Nuclear?', canal:'Sinapse', src:'episodios/ep01.mp3', img:'imagens/capa01.jpg'},
    {titulo:'SACANI RESPONDE [MISSÃO DART] - Ciência Sem Fim #113', canal:'Ciência Sem Fim', src:'episodios/ep02.mp3', img:'imagens/capa02.jpg'},
    {titulo:'POR QUE RAIZ DE 2 É IRRACIONAL? | Ledo Vaccaro', canal:'Cortes Matemática', src:'episodios/ep03.mp3', img:'imagens/capa03.jpg'}
];

let ep = document.querySelector('audio');
let indexEp = 0;

let duracaoEp = document.querySelector('.fim');
let imagem = document.querySelector('.capa');
let nomeEp = document.querySelector('.descricao h2');
let nomeCanal = document.querySelector('.descricao i');

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarEp);

document.querySelector('.botao-pause').addEventListener('click', pausarEp);

document.querySelector('.botao-fechar').addEventListener('click', pausarEp);

ep.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexEp--;
    if (indexEp < 0) {
        indexEp = 2;
    }
    renderizarEp(indexEp);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexEp++;
    if (indexEp > 2){
        indexEp = 0;
    }
    renderizarEp(indexEp);
});

// Funções
function renderizarEp(index){
    ep.setAttribute('src', episodios[index].src);
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    ep.addEventListener('loadeddata', () => {
        nomeEp.textContent = episodios[index].titulo;
        nomeCanal.textContent = episodios[index].canal;
        imagem.src = episodios[index].img;
        duracaoEp.textContent = segundosParaMinutos(Math.floor(ep.duration));
        
    });
}

function setarEpisodio(index){
    indexEp = index;
    renderizarEp(indexEp);
}

function tocarEp(){
    ep.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarEp(){
    ep.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((ep.currentTime / ep.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(ep.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}