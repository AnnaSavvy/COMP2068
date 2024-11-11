import express from 'express'

//we need to import employees.json:
import empl from './data/employees.json' assert {type: 'json'}

const app = express()
const port = 3000

app.get('/employees', (req, res) => {
  res.send(empl)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})