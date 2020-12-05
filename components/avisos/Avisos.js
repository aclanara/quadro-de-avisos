const db = require('../../knexfile.js')

/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
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
 * Alterar um aviso cadastrado no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo: <string>, data: <date>, mensagem: <string>}
 * @param {int} id ID do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */

 function editar(aviso, id){
  return db('avisos').where('ID_avisos', id).update(aviso)
  .then( _ =>{
    return {tipo:"sucesso", corpo:"Aviso alterado com sucesso!"}
  })
  .catch(err =>{
    return {tipo:"erro", corpo:"Erro:" + err}
  })
 }//Fim do editar

/**
 * Seleciona todos os avisos cadastrados
 * @returns {object} Objeto com todos os avisos cadastrados ou uma mensagem de erro
 */

function selecionarTodos(){
  return db.select('*').from('avisos')
  .then(avisos => {return avisos})
  .catch(err => {return {tipo:"erro", corpo:"Erro:" + err}})
} //Fim do selecionarTodos

/**
 * Seleciona um aviso
 * @param {*} id ID do aviso que será selecionado
 * @returns {pbject} Objeto com o aviso selecionado
 */

function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos', id).first()
  .then(aviso => {return aviso})
  .catch(err => {return {tipo:"erro", corpo:"Erro:" + err}})
}//Fim do selecionarAviso

/***
 * Função que exclui um aviso do banco de dados
 * @param {int} id Id do aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_avisos', id)
}

module.exports = {salvar, editar, selecionarTodos, selecionarAviso, excluir}