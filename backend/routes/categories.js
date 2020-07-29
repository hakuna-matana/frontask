const {Router} = require('express');
const router = Router();
const {Categories} = require('../models/categories')

router.get('/', (req, res) => {
  res.status(200).json(Categories)
})

module.exports = router