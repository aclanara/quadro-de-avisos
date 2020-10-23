//Importar as dependências
const express = require('express')
const bodyParser = require('body-parser')

//Importar as rotas de aviso
const routerAvisos = require('./components/avisos/AvisosController')

//Inicializando o express
const app = express()

//Configurar a view engine e configurar a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Rotas
app.use(routerAvisos)

//Escutar a porta
app.listen(3000)



