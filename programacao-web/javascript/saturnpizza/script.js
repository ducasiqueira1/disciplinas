var divpizzas = document.querySelector(".pizzas");
var divpedido = document.querySelector(".pedido");
var divadd = document.querySelector(".adicionado");
var btnconfirmar = document.querySelector(".confirmar");
var total = 0;
var pedidos = [];

for(var i = 0; i < pizzas.length; i++){

    var pimagem = pizzas[i]["imagem"];
    var pnome = pizzas[i]["nome"];
    var pingredientes = pizzas[i]["ingredientes"];
    var ppreco = pizzas[i]["preco"];

    var precop = ppreco;
    var precom = ppreco * 1.15;
    var precog = ppreco * 1.30;

    divpizzas.innerHTML += `<div class='row item'><div class='col-md-7'><div class='descricao'><img src='${pimagem}'/><h4>${pnome}</h4><p>${pingredientes}</p></div></div><div class='col-md-5'><div  class="opcoes"><button type="button" class="btn btn-sm btn-outline-secondary adicionar" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addPizza(${i}, 'P');">P<br/>R$${precop.toFixed(2)}</button><button type="button" class="btn btn-sm btn-outline-secondary adicionar" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addPizza(${i}, 'M');">M<br/>R$${precom.toFixed(2)}</button><button type="button" class="btn btn-sm btn-outline-secondary adicionar" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addPizza(${i}, 'G');">G<br/>R$${precog.toFixed(2)}</button></div></div></div>`;
}

function addPizza(id, tamanho){
    var pimagem = pizzas[id]["imagem"];
    var pnome = pizzas[id]["nome"];
    var pingredientes = pizzas[id]["ingredientes"];

    //btnconfirmar.addEventListener('click', confirmarPizza(id, tamanho));
    
    divadd.innerHTML = `<div class='col-md-9'><div class='descricao'><img src='${pimagem}'/><h4>${pnome}</h4><p>${pingredientes}</p></div></div><div class='col-md-3'><div class="preco">${tamanho} - R$${ppreco.toFixed(2)}</div></div>`
}

function confirmarPizza(id, tamanho){
    var pimagem = pizzas[id]["imagem"];
    var pnome = pizzas[id]["nome"];
    var pingredientes = pizzas[id]["ingredientes"];
    
    var spntotal = document.getElementById("total");
    var totalmodal = document.getElementById("totalmodal");
    

    if(tamanho == 'P'){
        var ppreco = pizzas[id]["preco"];
    } else if(tamanho == 'M'){
        var ppreco = pizzas[id]["preco"] * 1.15;
    } else {
        var ppreco = pizzas[id]["preco"] * 1.15
    }

    total += ppreco;

    divpedido.innerHTML += `<div class='row item'><div class='col-md-9'><div class='descricao'><img src='${pimagem}'/><h4>${pnome}</h4><p>${pingredientes}</p></div></div><div class='col-md-3'><div class="preco">${tamanho} - R$${ppreco.toFixed(2)}</div></div></div>`;

    spntotal.innerHTML = `R$${total.toFixed(2)}`;
    totalmodal.innerHTML = `R$${total.toFixed(2)}`;
}