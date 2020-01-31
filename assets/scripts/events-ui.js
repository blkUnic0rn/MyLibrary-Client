'use strict'
const showBooksList = require('./templates/booklist.handlebars')
const showSingleBook = require('./templates/bookProfile.handlebars')
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
  const myLibrary = showBooksList({ books: data.books })
  $('#bookshelf').html(myLibrary)
}

const onShowBookSuccess = (data) => {
  console.log(data.book)
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

const onRemoveSuccess = () => {
  $('.singleBook').empty()
    .then(onShowBookSuccess)
    .catch(onShowBookFailure)
}

const onRemoveFailure = () => {
  console.log('oh hey! You didnt remove a book')
}

module.exports = {
  onCreateBookSuccess,
  onCreateBookFailure,
  getBooksSuccess,
  onShowBookSuccess,
  onShowBookFailure,
  onRemoveSuccess,
  onRemoveFailure
}
