import express, { json } from "express";

/*
    CRUD em memoria
    criar rota para pegar usuario
    criar rota para cadastrar usuario
    criar rota para deletar usuario
    criar rota para atualizar usuario
*/
const admin = {
    nome: "admin", email: "admin@gmail.com"
}
const app = express();
app.use(express.json());
let users = [
    admin
]
app.listen(8080, () => {
    console.log("inicialized api");
});

app.get('/users', (req, res) => {
    res.json(users).status(200);
});