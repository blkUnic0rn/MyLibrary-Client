'use strict'
const api = require('./api')
const ui = require('./events-ui')
const getFormFields = require('./../../lib/get-form-fields')

const onCreateBook = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createBook(data)
    .then(ui.onCreateBookSuccess)
    .catch(ui.onCreateBookFailure)
}

const showCreateBookForm = () => {
  $('#bookshelf').hide()
  $('#createbookForm').show()
}

const onGetBooks = (event) => {
  $('#bookshelf').show()
  event.preventDefault()

  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#createNewBook').on('click', showCreateBookForm)
  $('#createBook').on('submit', onCreateBook)
  $('#showbooks').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
