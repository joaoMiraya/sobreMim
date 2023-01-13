const path = require('path');

const homeController = {
 index: (req, res) => {
    res.render('index')
 } 
}

module.exports = homeController;