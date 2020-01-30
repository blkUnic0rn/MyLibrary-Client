'use strict'
const showBooksList = require('./templates/booklist.handlebars')
const store = require('./store')

const onCreateBookSuccess = response => {
  store.book = response.book
  $('#createbookForm').hide()
  console.log('new book created')
}

const onCreateBookFailure = response => {
  console.log('could not create book')
}

const getBooksSuccess = (data) => {
  console.log(data)
  const myLibrary = showBooksList({ books: data.books })
  $('#bookshelf').html(myLibrary)
}

const onShowBookSuccess = (data) => {
  console.log('Horray!')
}

module.exports = {
  onCreateBookSuccess,
  onCreateBookFailure,
  getBooksSuccess,
  onShowBookSuccess
}
