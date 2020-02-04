'use strict'
const showBooksList = require('./templates/booklist.handlebars')
const showSingleBook = require('./templates/bookProfile.handlebars')
const updateBookForm = require('./templates/updateBookForm.handlebars')
const readercheck = require('./pagescripts')
const store = require('./store')
const api = require('./api')
const scripts = require('./pagescripts')

const onCreateBookSuccess = data => {
  store.book = data.book
  scripts.checkReaderStatus()
  $('#createbookForm').hide()
  $('#createBook').trigger('reset')
  $('#message').text('New Book Created')
  setTimeout(() => $('#message').text(' '), 3000)
}

const onCreateBookFailure = data => {
  $('#message').text('Could Not Create New Book')
  setTimeout(() => $('#message').text(' '), 3000)
}

const getBooksSuccess = (data) => {
  console.log(data.books.length)
  store.bookcount = data.books.length
  const myLibrary = showBooksList({
    books: data.books
  })
  $('#bookshelf').html(myLibrary)
  $('#createbookForm').hide()
  readercheck.checkReaderStatus()
}

const failure = (data) => {
  $('#message').text('Unable to Complete that Request')
  setTimeout(() => $('#message').text(' '), 3000)
}

const onShowBookSuccess = (data) => {
  const showBook = showSingleBook({
    book: data.book
  })
  $('#bookshelf').html(showBook)
  appendRatingImg(data.book.rating)
}

const appendRatingImg = (rating) => {
  if (rating === 1) {
    $('.individualBookRating').append("<img src='./public/oneheart.png' alt='one heart rating' width='350' height='150'/>")
  } else if (rating === 2) {
    $('.individualBookRating').append("<img src='./public/twohearts.png' alt='two heart rating' width='350' height='150'/>")
  } else if (rating === 3) {
    $('.individualBookRating').append("<img src='./public/threehearts.png' alt='three heart rating' width='350' height='150'/>")
  } else if (rating === 4) {
    $('.individualBookRating').append("<img src='./public/fourhearts.png' alt='four heart rating' width='350' height='150'/>")
  } else if (rating === 5) {
    $('.individualBookRating').append("<img src='./public/fivehearts.png' alt='five heart rating' width='350' height='150'/>")
  } else {
    $('#message').text('Invalid rating number')
  }
  setTimeout(() => $('#message').text(' '), 3000)
}

const onShowBookFailure = (data) => {
  $('#message').text('Unable to Complete that Request')
  setTimeout(() => $('#message').text(' '), 3000)
}

const clearBooks = () => {
  $('.singleBook').empty()
}

const onRemoveSuccess = (data) => {
  clearBooks()
  api.getBooks(data)
    .then(getBooksSuccess)
    .catch(onRemoveFailure)
}

const onRemoveFailure = () => {
  $('#message').text('Unable to Delete Book')
  setTimeout(() => $('#message').text(' '), 3000)
}

const onFindUpdateBookSuccess = (data) => {
  store.currentbook = data.book
  $('#updateBookForm').show()
  $('#bookshelf').hide()
  const populatedBookForm = updateBookForm({
    book: data.book
  })
  $('#updateBookForm').html(populatedBookForm)
}

const onFindUpdateBookFailure = (data) => {
  $('#message').append('Unable to Populate Update Form')
  setTimeout(() => $('#message').text(' '), 3000)
}

const onUpdateSuccess = (data) => {
  $('#message').text('Your Book was Updated Successfully')
  $('#updateBook').empty()
  $('#updateBookForm').hide()
  $('#bookshelf').show()
  setTimeout(() => $('#message').text(' '), 3000)

  api.getBooks(data)
    .then(getBooksSuccess)
    .catch(failure)
}

module.exports = {
  onCreateBookSuccess,
  onCreateBookFailure,
  getBooksSuccess,
  failure,
  onShowBookSuccess,
  onShowBookFailure,
  onRemoveSuccess,
  onRemoveFailure,
  onFindUpdateBookSuccess,
  onFindUpdateBookFailure,
  onUpdateSuccess
}
