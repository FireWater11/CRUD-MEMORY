import express, { json } from "express";
import routeUser from "./routes/route-users.js";
import { verifyUser } from "./middlewares/auth.js";

const app = express();


// Interprete o que vier como um JSON. Isso é um middleware global (aplicado em todas as rotas).
// executado antes de TODAS as rotas.

app.use(express.json()); // isso é um middleware . 
app.use(verifyUser)
app.use("/users", routeUser)


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

app.listen(8080, () => {
    console.log("inicialized api");
});

/*
app.delete("/usuarios/:id", adm , (req, res) => {
    console.log("kk deletado")
})
*/