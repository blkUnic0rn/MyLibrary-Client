'use strict'

const store = require('./../store')
const api = require('./api')
const showBooksList = require('./../templates/booklist.handlebars')

const onGetFavoritesSuccess = (data) => {
  const myLibraryFavorites = showBooksList({
    books: data.books
  })
  $('#bookshelf').html(myLibraryFavorites)
}

const onCreateFavoriteSuccess = (data) => {
  console.log('You favorited book')
}

const onFindCurrentBookSuccess = (data) => {
  store.currentbook = data.book
  api.createFavorite(data)
    .then(onCreateFavoriteSuccess)
    .catch()
}

module.exports = {
  onGetFavoritesSuccess,
  onCreateFavoriteSuccess,
  onFindCurrentBookSuccess
}
