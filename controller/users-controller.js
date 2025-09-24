
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// let id = 1;

// const users = [{
//     nome: "admin", 
//     email: "admin@gmail.com",
//     id: id
// }];

export async function searchId(req, res) {
    try {
        const id = parseInt(req.params.id);
        const user = await prisma.users.findUnique( // ta procurando por um ID só
            {
                where: {
                    id:Number(id)
                }
            }
        );
        res.status(200).json(user);
    } catch (error) {
        console.log("INPUT INVALID")
        console.log(error.message)
    }
    
};

export async function allUsers(req, res) { // o async é para sinalizar que tem algo que pode demorar na funcao
    
    try {
        const usersDB = await prisma.users.findMany(); // sinaliza que vai demorar e é para esperar a resposta
        res.status(200).json(usersDB);
    } catch (error) {
        console.log(error.message)
    }

};

export function createUser(req, res) {
    // pegar informacoes do body
    // definir id
    // adc na lista/db
    // atualizar o id (++)
    // retornar pro front o status 201(sucesso)
    const {nome, email} = req.body;
    if ( !nome || !email) {
        return res.status(400).json({mensagem: "error"});
    };

    // id++;
    
    const newUser = {
        name: nome,
        email: email,
        id: id
    };

    users.push(newUser);

    res.status(201).json(newUser);
};

export async function deleteUser(req, res) {

    const id = req.params.id;

    if (isNaN(id)) {
        return res.status(400).json({message: "not int number in params"})
    }

    try {
        await prisma.users.delete (
            {where: {
                id:Number(id)
            }}
        )
        res.status(204).send();
    } catch (error) {
        console.log(error.message)
        // na aplicacao teria que ter um ROLLBACK
    }

    // const id_num = parseInt(req.params.id);

    // if (isNaN(id_num)) {
    //     return res.status(400).json({error: "ID not a number(NaN)."});
    // };

    // for (let idx = 0; idx < users.length; idx++) {
    //     if (users[idx].id === id_num) {
    //         users.splice(idx, 1); // esse 1 remove so UM numero e o splice é para nao criar um novo array, so mudar.
    //         return res.status(204).send(); // tem q ter o send (sla porque)
    //     };
    // };

    // let idx = users.findIndex(
    //     (users) => users.id === id_num
    // );

    // if (idx === -1) {
    //     res.status(404).json({error: "ID not found in Database"})
    // };


    // return res.status(404).json({error: "ID not found in Database."});
};

export async function updateUser(req, res) {
    try {
        const id = parseInt(req.params.id);
        const {nome, email, idade} = req.body;


        if(isNaN(id)) {
            return res.status(400).json({error: "ID not a number(NaN)."});
        };

        await prisma.users.update({
            where: {
                id:Number(id),
            },
            
            data: {
                nome: nome,
                email: email,
                idade: idade
            },
        });

        res.status(204).send();
    } catch (error) {
        console.log(error.message)
    }
    
    // const user = users.find(
    //     (users_find) => users_find.id ===  id
    // );

    // if (!user) { // poderia ser tambem user === undefined(fiz desse jeito).
    //     return res.status(404).json({error: "ID not found in Database."});
    // };

    // const { nome, email } = req.body;

    // if (!nome && !email) {
    //     return res.status(400).json({error: "send at least one of the information."});
    // };

    // if (email) {
    //     let find_email = users.find(
    //         (u) => u.email === email && u.id !== id
    //     );

    //     if (find_email) {
    //         return res.status(409).json({ error: "email already registered." });
    //     };

    //     user.email = email;
    // };
    
    // user.email = email;
    
    // if(nome) {
    //     user.nome = nome;
    // };

    // res.status(200).json(user)

};