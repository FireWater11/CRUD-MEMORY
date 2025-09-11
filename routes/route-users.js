import express from "express";
import { imprimir, adm  } from "../teste_middleware.js";
import Router from "express";
import { allUsers, createUser, deleteUser, searchId, updateUser } from "../controller/users-controller.js";

const router = express();

//passar as rotas:

router.get('/', imprimir,  /* exemploMiddleware, Middleware2 (quantos precisar) */ (req, res) => {
    allUsers(req, res);
});

router.get("/:id", (req, res) => {
    searchId(req, res);
});

router.post('/', imprimir,  (req, res) => {
    createUser(req, res);
});

router.delete('/:id', (req, res) => {
    deleteUser(req, res);
});

router.patch('/:id', (req, res) => {
    updateUser(req, res);
}); 







export default router;