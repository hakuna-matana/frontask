const {Router} = require('express');
const router = Router();
const {Task} = require('../models/task')

router.get('/', (req, res) => {
  const category = req.query.category;
  res.status(200).json(Task.getAll(category))
})

module.exports = router