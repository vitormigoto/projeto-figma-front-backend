module.exports = app => {
    const controller = require('../controllers/usuariosCredenciais')();
  
    app.route('/api/lista/credenciais').get(controller.listaCredenciais);
    app.route('/api/verifica/login').post(controller.verificaLogin);
}