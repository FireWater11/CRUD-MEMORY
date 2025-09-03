export function imprimir(req, res, next) {
    console.log(`passou`);
    next();
}

export function adm(req, res, next) {
    const { userType } = req.body;

    // o primeiro verifica se ele passou algo(se nao é undefined), o segundo se é igual.
    if (userType && userType === "adm") {
        console.log(userType);
        next();
    } else {
        res.status(401).json({error: "not adm"});
    }
}