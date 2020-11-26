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
    return {tipo:"erro", corpo:"Erro:"+err}
  })
} //Fim do salvar

module.exports = {salvar}