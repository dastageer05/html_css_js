const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Employee = require("../exercise_16/models/Employee.js")


mongoose.connect('mongodb://127.0.0.1:27017/company')
const port = 3000

app.set("view engine", "ejs");

function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


app.get('/', (req, res) => {
  
  res.render('index', {foo: 'FOO'})
})


app.get('/generate', async (req,res) => {

  //to delete all pre object
  await Employee.deleteMany({})
  
  let randomNames = ['abhijeet','sarthak','piyush','dastagir']
  for (let index = 0; index<10; index++){
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: 300000,
      language: "python"
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})