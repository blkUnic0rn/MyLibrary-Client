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

const addHandlers = () => {
  $('#recommendedBooks').on('click', getRecBooks)
}

module.exports = {
  addHandlers
}
