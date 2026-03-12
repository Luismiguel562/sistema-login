const form = document.getElementById("loginForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const usuario = document.getElementById("usuario").value;
const senha = document.getElementById("senha").value;

const resposta = await fetch("http://localhost:3000/login", {

method: "POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
usuario,
senha
})

});

const dados = await resposta.json();

if(dados.sucesso){

alert("Login realizado!");

}
else{

alert("Usuário ou senha inválidos");

}

});