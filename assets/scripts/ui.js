'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('.messageboard').append('Successfully Signed Up!').show()
  $('.messageboard').delay(6900).hide()
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('.messageboard').text('Unable to Sign You Up, Please Try Again.').show()
  $('.messageboard').delay(6900).hide()
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  $('.messageboard').show().text('Successfully Signed In!')
  $('.messageboard').delay(6900).hide()
  store.user = response.user
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#top-aside').show()
  $('#sign-in').trigger('reset')
  $('.welcome').hide()
}

const signInFailure = function () {
  $('.messageboard').text('Unable to Sign In, Please Try Again.').show()
  $('.messageboard').delay(6900).hide()
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (response) {
  $('.messageboard').text('Successfully Signed Out!').show()
  $('.messageboard').delay(6900).hide()
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
  $('.messageboard').text('Unable to Sign Out, Please Try Again.').show()
  $('.messageboard').delay(6900).hide()
}

const changePwSuccess = function (response) {
  $('.messageboard').text('Changed password successfully!').show()
  $('.messageboard').delay(6900).hide()
  $('#change-pw').trigger('reset')
}

const changePwFailure = function () {
  $('#change-pw').trigger('reset')
  $('.messageboard').text('Unable to Change Your Password. Please Try Again.').show()
  $('.messageboard').delay(6900).hide()
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
