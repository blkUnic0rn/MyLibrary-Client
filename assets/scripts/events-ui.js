'use strict'
const showBooksList = require('./templates/booklist.handlebars')
const showSingleBook = require('./templates/bookProfile.handlebars')
const updateBookForm = require('./templates/updateBookForm.handlebars')
const store = require('./store')
const api = require('./api')

const onCreateBookSuccess = data => {
  store.book = data.book
  $('#createbookForm').hide()
  $('#createBook').trigger('reset')
  $('.messageboard').append('New Book Created')
  $('.messageboard').fadeOut(5600)
}

const onCreateBookFailure = data => {
  $('.messageboard').append('Could Not Create New Book')
  $('.messageboard').fadeOut(5600)
}

const getBooksSuccess = (data) => {
  const myLibrary = showBooksList({ books: data.books })
  $('#bookshelf').html(myLibrary)
  $('#createbookForm').hide()
}

const failure = (data) => {
  $('.messageboard').append('Unable to Complete that Request')
  $('.messageboard').fadeOut(5600)
}

const onShowBookSuccess = (data) => {
  const showBook = showSingleBook({book: data.book})
  $('#bookshelf').html(showBook)
  console.log(data.book.rating)
  appendRatingImg(data.book.rating)
}

const appendRatingImg = (rating) => {
  if (rating === 1) {
    $('.individualBookRating').append("<img src='./../public/oneheart.png' alt='one heart rating' width='350' height='150'/>")
  } else if (rating === 2) {
    $('.individualBookRating').append("<img src='./../public/twohearts.png' alt='two heart rating' width='350' height='150'/>")
  } else if (rating === 3) {
    $('.individualBookRating').append("<img src='./../public/threehearts.png' alt='three heart rating' width='350' height='150'/>")
  } else if (rating === 4) {
    $('.individualBookRating').append("<img src='./../public/fourhearts.png' alt='four heart rating' width='350' height='150'/>")
  } else if (rating === 5) {
    $('.individualBookRating').append("<img src='./../public/fivehearts.png' alt='five heart rating' width='350' height='150'/>")
  } else {
    $('.messageboard').append('Invalid rating number')
    $('.messageboard').fadeOut(5600)
  }
}

const onShowBookFailure = (data) => {
  $('.messageboard').append('Unable to Complete that Request')
  $('.messageboard').fadeOut(5600)
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
  $('.messageboard').append('Unable to Delete Book')
  $('.messageboard').fadeOut(5600)
}

const onFindUpdateBookSuccess = (data) => {
  store.currentbook = data.book
  $('#updateBookForm').show()
  $('#bookshelf').hide()
  const populatedBookForm = updateBookForm({book: data.book})
  $('#updateBookForm').html(populatedBookForm)
}

const onFindUpdateBookFailure = (data) => {
  $('.messageboard').append('Unable to Populate Update Form')
  $('.messageboard').fadeOut(5600)
}

const onUpdateSuccess = (data) => {
  $('.messageboard').append('Your Book was Updated Successfully')
  $('.messageboard').fadeOut(5600)
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
