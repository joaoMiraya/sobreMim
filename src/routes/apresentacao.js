const express = require('express');
const router = express.Router();


const apresentacaoController = require('../controllers/apresentacaoController')

router.get('/', apresentacaoController.home)


module.exports = router;
