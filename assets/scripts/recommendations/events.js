'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const bookApi = require('./../api.js')
const bookui = require('./../events-ui.js')

const getRecBooks = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.getRecBooks(data)
    .then(ui.onGetRecBooksSuccess)
    .catch(ui.failure)
}

const findRecBook = (event) => {
  const id = $(event.target).closest('section').data('id')
  // open book form with current rec book information
  api.getaBook(id)
    .then(ui.onGetaBookSuccess)
    .catch(ui.failure)
}

const addRecBook = (event) => {
  // on submit add book to book list
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  bookApi.createBook(data)
    .then(ui.onCreateBookSuccess)
    .catch(bookui.onCreateBookFailure)
}

const addHandlers = () => {
  $('#recommendedBooks').on('click', getRecBooks)
  $('#bookshelf').on('click', '.recList', findRecBook)
  $('#bookshelf').on('submit', '#addRecBook', addRecBook)
}

module.exports = {
  addHandlers
}
