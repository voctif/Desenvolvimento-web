/////////////////////////////// EXE01

function listnum(num, numlist){
    cont = 0;
    for(i=0; i < numlist.length; i++){
        if(numlist[i] == num){
            cont++;
        }
    }
    return cont;
}

var lista = listnum(2, [3,2,4,5,3,2,2,3,2]);
console.log(lista);

/////////////////////////////// EXE02

function listaimpar(numlist){
    soma = 0;
    for(i=0; i < numlist.length; i++){
        if(numlist[i] % 2 !== 0){
            soma = soma + numlist[i];
        }
    }
    return soma;
}

var impar = listaimpar([3,3,2,2,2,2,2,2,2]);
console.log(impar);

/////////////////////////////// EXE03

function listaordem(numlist){
    return numlist.sort();
}
var ordem = listaordem([3,3,2,4,2,2,6,2,7]);
console.log(ordem);


/////////////////////////////// EXE04
function Pessoa(pessoa){
    return "nome: " + pessoa.nome + " idade: " + pessoa.idade + " altura: " + pessoa.altura + " peso: " + pessoa.peso;
}

var pessoa = {
    nome:"victor",
    idade:19,
    altura: 180,
    peso: 60,
}

console.log(Pessoa(pessoa));

/////////////////////////////// EXE05
function Listanome(listanome){ 
    return listanome.sort();
}
var alfabetico = Listanome(["a", "h", "d", "d", "p", "6", "z"]);
console.log(alfabetico);



