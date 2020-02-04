'use strict'
const showBooksList = require('./templates/booklist.handlebars')
const showSingleBook = require('./templates/bookProfile.handlebars')
const updateBookForm = require('./templates/updateBookForm.handlebars')
const store = require('./store')
const api = require('./api')
const scripts = require('./pagescripts')

const onCreateBookSuccess = data => {
  store.book = data.book
  store.bookcount += 1
  scripts.checkReaderStatus()
  $('#createbookForm').hide()
  $('#createBook').trigger('reset')
  $('.newbook').append('New Book Created')
}

const onCreateBookFailure = data => {
  $('.newbook').append('Could Not Create New Book')
}

const getBooksSuccess = (data) => {
  const myLibrary = showBooksList({
    books: data.books
  })
  $('#bookshelf').html(myLibrary)
  $('#createbookForm').hide()
}

const failure = (data) => {
  $('.failure').append('Unable to Complete that Request')
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
    $('.rating').append('Invalid rating number')
  }
}

const onShowBookFailure = (data) => {
  $('.failure').append('Unable to Complete that Request')
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
  $('.failure').append('Unable to Delete Book')
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
  $('.failure').append('Unable to Populate Update Form')
}

const onUpdateSuccess = (data) => {
  $('.updatebook').append('Your Book was Updated Success')
  $('#updateBook').empty()
  $('#updateBookForm').hide()
  $('#bookshelf').show()

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
