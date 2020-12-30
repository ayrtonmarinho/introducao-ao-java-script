function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clilcar</b>";
    //alert("Obgridado por clicar.");
}

function redirecionar(){
    window.open("http://google.com");
    // window.location.href = "http://google.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado!!";
    //document.getElementById("mudatexto").innerHTML = "Texto trocado!";
   // alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mudatexto").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";

}

function load(){
    alert("Pagina carregada!");
}

function change(elemento){
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1+n2;
}
var validar = 0;
function validaIdade(idade){
    //var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);
*/


/*
var d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth());
*/

/*
var i;
for(i=0; i<=5; i++){
    alert(i);
    console.log(i);
}
*/

/*
var count = 0;
while(count<5){
    console.log(count)
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade");
}
*/

/*
frutas = [{nome:"Uva", cor:"Roxo"},{nome:"Lichia", cor:"Vermelha"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome:"Goiaba", cor:"Verde"}
console.log(fruta.nome);
alert(fruta.cor); 
*/


/*
var lista = ["Ovo", "Pão", "Queijo"];

lista.pop();
lista.push("Batata");

console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "))
*/



/*
var nome = "Ayrton Marinho";
var idade = 29;
var idade2 = "10";
var n1, n2;
var frase = "Dota é o melhor jogo do mundo!";

n1 = 5;
n2 = 34;
// alert("Bem vindo "+nome+ " tem "+idade+" anos.");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Dota","LOL"));
//alert(frase.replace("Dota","LOL"));
alert(n1*n2);
*/