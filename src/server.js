const express = require('express');
// Importa o middleware cors para habilitar o CORS no servidor.
const cors = require('cors');
//definir a porta
const porta = process.env.PORT || 3333;
const app = express();
//habilitar o cors e utilizar json
app.use(cors());
app.use(express.json());
//testar
app.listen(porta, () => console.log(`🚀 HTTP server running on http://localhost:` + porta));

// Importa a configuração do banco de dados, provavelmente para se conectar a um banco de dados MySQL.
const connection = require('./db_config.js');

/**
* @swagger
* /cadastro/singUp:
*   post:
*       summary: Retorna o cadastro de usuarios
*       responses:
*           200:
*               description: Cadastro de usuários
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               type: object
*/

app.post("/cadastro/signUp", (request, response) => {
    let params = Array(
        request.body.name,
        request.body.email,
        request.body.passowrd
    );

    let query = "INSERT INTO signUp(name, email, password) VALUES(?,?,?);"

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "sem sucesso",
                    data: err
                })
        }
    })
})

/**
* @swagger
* /cadastro/singIn:
*   post:
*       summary: Retorna o login dos usuarios
*       responses:
*           200:
*               description: Login de usuários
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               type: object
*/

app.post("cadastro/signIn", (request, response) => {
    let params = Array(
        request.body.email,
    );

    let query = "SELECT password FROM signUn WHERE email = ?"

    connection.query(query, params, (err, results) => {
        if (results) {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: "sucesso",
                        data: results[0]
                    })
            }
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "sem sucesso",
                    data: err
                })

        }
    })
});
