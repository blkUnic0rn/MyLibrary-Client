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

const createFavorite = (data) => {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'favorite': {
        'user_id': store.user.id,
        'book_id': store.currentbook.id
      }
    }
  })
}

module.exports = {
  getFavoriteBooks,
  createFavorite
}
