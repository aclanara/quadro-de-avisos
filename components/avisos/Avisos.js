const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguonte formato:
 * {titulo: <string>, data: <date>, mensagem: <string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */

function salvar(aviso){
  return db.insert(aviso).into('avisos')
  .then( _ =>{
    return {tipo:"sucesso", corpo:"Aviso cadastrado com sucesso!"}
  })
  .catch(err =>{
    return {tipo:"erro", corpo:"Erro:" + err}
  })
} //Fim do salvar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou uma mensagem de erro
 */

function selecionarTodos(){
  return db.select('*').from('avisos')
  .then(avisos => {return avisos})
  .catch(err => {return {tipo:"erro", corpo:"Erro:" + err}})
} //Fim do selecionarTodos

module.exports = {salvar, selecionarTodos}