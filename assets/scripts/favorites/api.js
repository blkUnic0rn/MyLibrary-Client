'use strict'
const store = require('./../store')
const config = require('./../config')

const getFavoriteBooks = (data) => {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createFavorite = (bookid) => {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'favorite': {
        'user_id': store.user.id,
        'book_id': bookid
      }
    }
  })
}

module.exports = {
  getFavoriteBooks,
  createFavorite
}
