const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "1234"){
        
        localStorage.setItem("usuarioLogado", usuario);

        alert("Login realizado!");

        window.location.href = "dashboard.html";

    } else {
        alert("Usuário ou senha incorretos");
    }

});