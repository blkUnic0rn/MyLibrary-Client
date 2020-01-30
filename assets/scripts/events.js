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
  $('#createbookForm').show()
}

const addHandlers = () => {
  $('#createNewBook').on('click', showCreateBookForm)
  $('#createBook').on('submit', onCreateBook)
}

module.exports = {
  addHandlers
}
