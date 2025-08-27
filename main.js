import express, { json } from "express";
const app = express();
app.use(express.json());

/*
    CRUD em memoria
    criar rota para pegar usuario --
    criar rota para cadastrar usuario
    criar rota para deletar usuario
    criar rota para atualizar usuario
*/

let id = 1;
const users = [{
    nome: "admin", 
    email: "admin@gmail.com",
    id: id
}];

app.listen(8080, () => {
    console.log("inicialized api");
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/users', (req, res) => {
    // pegar informacoes do body
    // definir id
    // adc na lista/db
    // atualizar o id (++)
    // retornar pro front o status 201(sucesso)
    const {nome, email} = req.body;
    if ( !nome || !email) {
        return res.status(400).json({mensagem: "error"});
    }

    id++;
    
    const newUser = {
        name: nome,
        email: email,
        id: id
    };

    users.push(newUser);

    res.status(201).json(newUser);
});