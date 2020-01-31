'use strict'
const showBooksList = require('./templates/booklist.handlebars')
const showSingleBook = require('./templates/bookProfile.handlebars')
const updateBookForm = require('./templates/updateBookForm.handlebars')
const store = require('./store')
const api = require('./api')

const onCreateBookSuccess = data => {
  store.book = data.book
  $('#createbookForm').hide()
  console.log('new book created')
  $('#createBook').trigger('reset')
}

const onCreateBookFailure = data => {
  console.log('could not create book')
}

const getBooksSuccess = (data) => {
  const myLibrary = showBooksList({ books: data.books })
  $('#bookshelf').html(myLibrary)
  $('#createbookForm').hide()
}

const failure = (data) => {
  console.log('Unable to complete that request')
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
    console.log('something went wrong')
  }
}

const onShowBookFailure = (data) => {
  console.log('Boooo you suck!')
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
  console.log('oh hey! You didnt remove a book')
}

const onFindUpdateBookSuccess = (data) => {
  store.currentbook = data.book
  $('#updateBookForm').show()
  $('#bookshelf').hide()
  const populatedBookForm = updateBookForm({book: data.book})
  $('#updateBookForm').html(populatedBookForm)
}

const onFindUpdateBookFailure = (data) => {
  console.log('oh man! the update book form didnt populate')
}

const onUpdateSuccess = (data) => {
  console.log('Your book was updated successfully')
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
