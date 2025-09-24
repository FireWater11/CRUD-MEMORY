
export async function verifyUser(req, res, next) {
    // console.log("OI EU PASSEI POR AQUI RSRS")

    // const header = req.headers;
    // console.log(headers);

    const auth = req.headers.authorization;
    // console.log(auth)

    // se a string que eu passar comecar com Basic entao:
    //verificar o tipo do token
    if (!auth.startsWith('Basic')) {
        return res.send(400).json({message: "token precisa ser BASIC"})
    } 

    // pegar conteudo encriptado
    const contentToken = auth.split(" ")[1];
    console.log(contentToken);

    // desencriptar o conteudo pego
    const contentTokeDescript = Buffer.from(contentToken, 'base64').toString();
    console.log(contentTokeDescript);

    const userInput = contentTokeDescript.split(":"[0])
    // const passInput = contentTokeDescript.split(":"[1])

    // console.log(userInput);
    // console.log(passInput);
    // preciso verificar se o usuario existe
    const user = await prisma.users.findUnique({where: {nome:nome}});
    // se nao existir, acesso negado
}