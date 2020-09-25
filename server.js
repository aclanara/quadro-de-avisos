//Importar as dependências
const express = require('express')
const bodyParser = require('body-parser')

//Inicializando o express
const app = express()

//Configurar a view engine e configurar a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Rotas
app.get("/", (req, res) =>{
    res.send("Vai ETIM!")
})

//Escutar a porta
app.listen(3000)