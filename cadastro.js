const form = document.getElementById("cadastroForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const usuario = document.getElementById("novoUsuario").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("novaSenha").value;

const resposta = await fetch("http://localhost:3000/cadastro", {

method: "POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
usuario,
email,
senha
})

});

const dados = await resposta.json();

if(dados.sucesso){
alert("Usuário cadastrado com sucesso!");
} else {
alert("Erro ao cadastrar");
}

});