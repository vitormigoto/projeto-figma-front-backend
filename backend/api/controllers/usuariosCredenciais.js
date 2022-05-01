module.exports = () => {
    const credenciaisDB = require('../data/usuariosCredenciais.json');
    const controller = {};
  
    controller.listaCredenciais = (req, res) => res.status(200).json(credenciaisDB);

    controller.verificaLogin = (req,res) =>{
      if(!req.body){
        res.status(401)
      }
      let dados = req.body
      let status = verificaUsuario(dados.usuario,dados.senha)
      
      if(status)
      {
        res.status(200).json('Acesso Permitido')
      }else{
        res.status(401).json('Acesso Negado!')
      }
    }

    function verificaUsuario(usuario,senha){
      let dados = credenciaisDB.usuariosCredencial.data;
      
      let validacao = dados.find(dado => {
        if(dado.user == usuario && dado.senha == senha){
          return true
        }else{
          return false
        }
      })

      return validacao
    }
  
    return controller;
  }