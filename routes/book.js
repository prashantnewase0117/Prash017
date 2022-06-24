const express = require('express')
const db = require('../db')

const router = express.Router()
const utils = require('../utils')

//GET  --> Display Book using name from Containerized MySQL
router.get('/:book_title', (request, response) => {
  const { book_title } = request.params

  const statement = `SELECT * FROM book WHERE book_title='${book_title}'`

  db.pool.query(statement, (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

//POST --> ADD Book data into Containerized MySQL table
router.post('/add', (request, response) => {
  const { book_title, publisher_name, author_name } = request.body

  const statement = `INSERT INTO book ( book_title,publisher_name,author_name) VALUES (?,?,?); `

  db.pool.query(
    statement,
    [book_title, publisher_name, author_name],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

//UPDATE --> Update publisher_name and author_name into Containerized MySQL table
router.put('/update/:book_title', (request, response) => {
  const { book_title } = request.params
  const { publisher_name, author_name } = request.body

  const statement = `UPDATE book SET publisher_name=?,author_name=? WHERE book_title=?`

  db.pool.query(
    statement,
    [publisher_name, author_name, book_title],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

module.exports = router
