var unitario = 21;

var umdia = document.querySelector("#umdia");
var tresdias = document.querySelector("#tresdias");
var setedias = document.querySelector("#setedias");
var quinzedias = document.querySelector("#quinzedias");
var trintadias = document.querySelector("#trintadias");

umdia.addEventListener('click', () => {
    var preco = document.querySelector("#preco");
    var valor = unitario;

    preco.textContent = "R$ " + valor + ",00";

    umdia.classList.add('selecionado');
    tresdias.classList.remove('selecionado');
    setedias.classList.remove('selecionado');
    quinzedias.classList.remove('selecionado');
    trintadias.classList.remove('selecionado');

});

tresdias.addEventListener('click', () => {
    var preco = document.querySelector("#preco");
    var valor = unitario * 3;

    preco.textContent = "R$ " + valor + ",00";

    umdia.classList.remove('selecionado');
    tresdias.classList.add('selecionado');
    setedias.classList.remove('selecionado');
    quinzedias.classList.remove('selecionado');
    trintadias.classList.remove('selecionado');

});

setedias.addEventListener('click', () => {
    var preco = document.querySelector("#preco");
    var valor = unitario * 7;

    preco.textContent = "R$ " + valor + ",00";

    umdia.classList.remove('selecionado');
    tresdias.classList.remove('selecionado');
    setedias.classList.add('selecionado');
    quinzedias.classList.remove('selecionado');
    trintadias.classList.remove('selecionado');

});

quinzedias.addEventListener('click', () => {
    var preco = document.querySelector("#preco");
    var valor = unitario * 15;

    preco.textContent = "R$ " + valor + ",00";

    umdia.classList.remove('selecionado');
    tresdias.classList.remove('selecionado');
    setedias.classList.remove('selecionado');
    quinzedias.classList.add('selecionado');
    trintadias.classList.remove('selecionado');

});

trintadias.addEventListener('click', () => {
    var preco = document.querySelector("#preco");
    var valor = unitario * 30;

    preco.textContent = "R$ " + valor + ",00";

    umdia.classList.remove('selecionado');
    tresdias.classList.remove('selecionado');
    setedias.classList.remove('selecionado');
    quinzedias.classList.remove('selecionado');
    trintadias.classList.add('selecionado');

});



