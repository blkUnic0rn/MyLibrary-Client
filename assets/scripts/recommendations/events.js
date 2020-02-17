'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const getRecBooks = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.getRecBooks(data)
    .then(ui.onGetRecBooksSuccess)
    .catch()
}

const addRecBook = (event) => {
  const id = $(event.target).closest('section').data('id')
  // open book form with current rec books information
  api.getaBook(id)
    .then(ui.onGetaBookSuccess)
    .then()
    .catch()
}

const addHandlers = () => {
  $('#recommendedBooks').on('click', getRecBooks)
  $('#bookshelf').on('click', '.recList', addRecBook)
}

module.exports = {
  addHandlers
}
