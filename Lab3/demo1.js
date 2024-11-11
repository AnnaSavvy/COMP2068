import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1> Assignment 3 </b> Group #20  </h1> <p> Anna Savitskaia, Lider Nebi Mese, Heman Sangwan </p>')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})