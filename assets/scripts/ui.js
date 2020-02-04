'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('.signup').append('Successfully Signed Up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('.signup').text('Unable to Sign You Up, Please Try Again.')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  $('.signin').text('Successfully Signed In!')
  store.user = response.user
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#top-aside').show()
  $('#sign-in').trigger('reset')
  $('.welcome').hide()
}

const signInFailure = function () {
  $('.signin').text('Unable to Sign In, Please Try Again.')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (response) {
  $('.signout').text('Successfully Signed Out!')
  $('#sign-in-modal').trigger('reset')
  $('#change-pw').hide()
  $('#logout').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#createNewBook').hide()
  $('#showbooks').hide()
  $('#bookshelf').hide()
  $('.welcome').show()
  $('.top-aside').hide()
}

const signOutFailure = function () {
  $('.signout').text('Unable to Sign Out, Please Try Again.')
}

const changePwSuccess = function (response) {
  $('.changepw').text('Changed password successfully!')
  $('#change-pw').trigger('reset')
}

const changePwFailure = function () {
  $('#change-pw').trigger('reset')
  $('.changepw').text('Unable to Change Your Password. Please Try Again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePwSuccess,
  changePwFailure
}
