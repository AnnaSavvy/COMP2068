import express from 'express'

const app = express()
const port = 3000

app.get('/crud', (req, res) => {
    res.send('testing get')
})

app.post('/crud', (req, res) => {
    res.send('testing post')
})

app.put('/crud', (req, res) => {
    res.send('testing put')
})

app.delete('/crud', (req, res) => {
    res.send('testing delete')
})

/*
we also can put everything in one command if there is the same '/link'
basically like this: app.get().put().delete().post()
*/

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

/* 
create = post()
read = get()
update = put()
delete = delete()
*/
