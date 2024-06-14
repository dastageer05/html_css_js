
const express = require('express')
const app = express()
const port = 3000

//app.get ,app.post,app.put,app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('About!')
})

app.get('/blog/:slug', (req,res)=>{
    res.send(`hello ${req.params.slug}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})