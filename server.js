const express = require('express')

const app = express()

const routerBook = require('./routes/book')

app.use(express.json())

app.use('/user', routerBook)

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
  process.exit()
})
