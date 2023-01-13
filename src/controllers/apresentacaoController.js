const path = require('path');

const apresentacaoController = {
 home: (req, res) => {
    res.render('apresentacao')
 } 
}

module.exports = apresentacaoController;