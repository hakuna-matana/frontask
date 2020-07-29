const express = require('express');
const path = require('path');
const baseRoutes = require('./routes/base');
const categoriesRoutes = require('./routes/categories');

const app = express();

app.use(express.urlencoded({extended:true}));

app.use('/', baseRoutes);
app.use('/categories', categoriesRoutes);

const PORT = process.env.PORT || 4000;

start();

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}