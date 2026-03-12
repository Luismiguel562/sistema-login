const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./usuarios.db");

db.run(`
CREATE TABLE IF NOT EXISTS usuarios (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 usuario TEXT,
 email TEXT,
 senha TEXT
)
`);

app.post("/cadastro", (req, res) => {

const { usuario, email, senha } = req.body;

db.run(
"INSERT INTO usuarios (usuario, email, senha) VALUES (?, ?, ?)",
[usuario, email, senha],

function(err){

if(err){
res.json({ sucesso:false });
}else{
res.json({ sucesso:true });
}

}

);

});
app.post("/login", (req, res) => {

const { usuario, senha } = req.body;

db.get(
"SELECT * FROM usuarios WHERE usuario = ? AND senha = ?",
[usuario, senha],

(err, row) => {

if(row){
res.json({ sucesso: true });
}else{
res.json({ sucesso: false });
}

}

);

});
app.listen(3000, () => {
console.log("Servidor rodando na porta 3000");
});