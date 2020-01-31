'use strict'
const api = require('./api')
const ui = require('./events-ui')
const store = require('./store')
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

const toRemove = (event) => {
  const id = $(event.target).closest('section').data('id')
  api.onRemoveBooks(id)
    .then(ui.onRemoveSuccess)
    .catch(ui.onRemoveFailure)
}

const showBookProfile = (event) => {
  const id = $(event.target).closest('section').data('id')
  api.getaBook(id)
    .then(ui.onShowBookSuccess)
    .catch(ui.onShowBookFailure)
}

const updateBookForm = (event) => {
  const id = $(event.target).closest('section').data('id')
  api.getaBook(id)
    .then(ui.onFindUpdateBookSuccess)
    .catch(ui.onFindUpdateBookFailure)
}

const toUpdateBook = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.updateBook(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#createNewBook').on('click', showCreateBookForm)
  $('#createBook').on('submit', onCreateBook)
  $('#showbooks').on('click', onGetBooks)
  $('#bookshelf').on('click', '.bookList', showBookProfile)
  $('#bookshelf').on('click', '#destroyBook', toRemove)
  $('#bookshelf').on('click', '#updateBook', updateBookForm)
  $('#updateBookForm').on('submit', '#UpdateBook', toUpdateBook)
}

module.exports = {
  addHandlers
}
