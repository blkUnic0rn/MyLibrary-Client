
'use strict'

const config = require('./config')
const store = require('./store')

const signUp = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePw = (data) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createBook = (data) => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getBooks = () => {
  return $.ajax({
    url: config.apiUrl + '/books',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getaBook = (id) => {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onRemoveBooks = (id) => {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBook = (data) => {
  return $.ajax({
    url: config.apiUrl + '/books/' + store.currentbook.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePw,
  createBook,
  getBooks,
  onRemoveBooks,
  getaBook,
  updateBook
}
