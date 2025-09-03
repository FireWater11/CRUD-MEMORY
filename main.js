import express, { json } from "express";
import { imprimir, adm  } from "./teste_middleware.js";

const app = express();


// Interprete o que vier como um JSON. Isso é um middleware global (aplicado em todas as rotas).
// executado antes de TODAS as rotas.
app.use(express.json()); // isso é um middleware . 


// app.use(imprimir);


/*
    CRUD em memoria
    criar rota para pegar usuario --
    criar rota para cadastrar usuario
    criar rota para deletar usuario
    criar rota para atualizar usuario
*/

/* 

middleware: sao etapas que vc tem que seguir e passar antes de chegar no seu objetivo.
ex: verificar se esta logado, verificar os dados, etc.

definir por ex, para onde continua (as etapas) e se continua.

LOGS: quem está chamando a API (um registro).

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



app.get('/users', imprimir,  /* exemploMiddleware, Middleware2 (quantos precisar) */ (req, res) => {
    res.status(200).json(users);
});

app.post('/users', imprimir,  (req, res) => {
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


app.delete('/users/:id', (req, res) => {
    const id_num = parseInt(req.params.id);

    if (isNaN(id_num)) {
        return res.status(400).json({error: "ID not a number(NaN)."});
    }

    for (let idx = 0; idx < users.length; idx++) {
        if (users[idx].id === id_num) {
            users.splice(idx, 1); // esse 1 remove so UM numero e o splice é para nao criar um novo array, so mudar.
            return res.status(204).send(); // tem q ter o send (sla porque)
        };
    };

    // let idx = users.findIndex(
    //     (users) => users.id === id_num
    // );

    // if (idx === -1) {
    //     res.status(404).json({error: "ID not found in Database"})
    // }


    return res.status(404).json({error: "ID not found in Database."});

});

app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)) {
        return res.status(400).json({error: "ID not a number(NaN)."});
    }

    const user = users.find(
        (users_find) => users_find.id ===  id
    );

    if (!user) { // poderia ser tambem user === undefined(fiz desse jeito).
        return res.status(404).json({error: "ID not found in Database."});
    };

    const { nome, email } = req.body;

    if (!nome && !email) {
        return res.status(400).json({error: "send at least one of the information."});
    };

    if(email) {
        let find_email = users.findIndex((users) => users.email === email);

        if(find_email !== -1) { // -1 significa que ele ACHOU.
            return res.status(409).json({error: "email already registered."});
        };
    };
    
    user.email = email;
    
    if(nome) {
        user.nome = nome;
    };

    res.status(200).json(user)

}); 


app.delete("/usuarios/:id", adm , (req, res) => {
    console.log("kk deletado")
})