'use strict'

const api = require('./api')
const ui = require('./ui')
const booksApi = require('./../api')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields')

const getFavoriteBooks = (event) => {
  const form = event.target
  const data = getFormFields(form)

  api.getFavoriteBooks(data)
    .then(ui.onGetFavoritesSuccess)
    .catch()
}

const findCurrentBook = (event) => {
  const id = $(event.target).closest('section').data('id')
  booksApi.getaBook(id)
    .then(ui.onFindCurrentBookSuccess)
    .catch()
}

const addHandlers = () => {
  $('favoriteBooks').on('click', getFavoriteBooks)
  $('#bookshelf').on('click', '#favoriteBook', findCurrentBook)
}

module.exports = {
  addHandlers
}
