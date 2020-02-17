'use strict'

const showRecList = require('./../templates/recList.handlebars')
const addRecBook = require('./../templates/createRecBook.handlebars')
const store = require('./../store.js')
const scripts = require('./../pagescripts')
const api = require('./../api')
const ui = require('./../events-ui')

const onGetRecBooksSuccess = (data) => {
  const myRecommendations = showRecList({
    recommendations: data.recommendations
  })
  $('#bookshelf').html(myRecommendations)
  $('#createbookForm').hide()
}

const onGetaBookSuccess = (data) => {
  store.currentbook = data
  console.log(store.currentbook)
  const newRecBook = addRecBook({
    recommendation: data.recommendation
  })
  $('#bookshelf').html(newRecBook)
}

const failure = (data) => {
  $('#message').text('Unable to Complete that Request')
  setTimeout(() => $('#message').text(' '), 3000)
}

const onCreateBookSuccess = (data) => {
  store.book = data.book
  scripts.checkReaderStatus()
  $('#addRecBook').hide()
  $('#addRecBook').trigger('reset')
  $('#message').text('New Book Created')
  setTimeout(() => $('#message').text(' '), 3000)
  api.getBooks(data)
    .then(ui.getBooksSuccess)
    .catch(failure)
}

module.exports = {
  onGetRecBooksSuccess,
  onGetaBookSuccess,
  failure,
  onCreateBookSuccess
}
