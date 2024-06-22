var ealunos = document.querySelector("#alunos");
var enome = document.querySelector(".nome h2");
var enasc = document.querySelector(".datanasc h3");
var esexo = document.querySelector(".sexo h3");

for(var i = 0; i < alunos.length; i++){
    var pnome = alunos[i]["nome"];

    ealunos.innerHTML += `<tr><th scope="row">${i+1}</th><td><a href="#" class="link-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setarAluno(0);">${pnome}</a> <span class="alert alert-secondary"> Em curso </span></td><td><input type="number" class="form-control" placeholder="0.0"></td><td><input type="number" class="form-control" placeholder="0.0"></td><td><input type="number" class="form-control" placeholder="0.0"></td><td><input type="number" class="form-control" placeholder="0.0"></td><td>0.0</td></tr>`;
}

function setarAluno(i){
    var pnome = alunos[i]["nome"];
    var pnasc = alunos[i]["data_nascimento"];
    var psexo = alunos[i]["sexo"];
    var pfili = alunos[i]["filiacao"];

    enome.innerHTML = pnome;
    enasc.innerHTML = pnasc;
    esexo.innerHTML = psexo;
}