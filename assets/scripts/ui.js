'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('#message').text('Successfully Signed Up!')
  $('#sign-up').trigger('reset')
  setTimeout(() => $('#message').text(' '), 3000)
}

const signUpFailure = function () {
  $('#message').text('Unable to Sign You Up, Please Try Again.')
  $('#sign-up').trigger('reset')
  setTimeout(() => $('#message').text(' '), 3000)
}

const signInSuccess = function (response) {
  $('#message').text('Successfully Signed In!')
  store.user = response.user
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#top-aside').show()
  $('#sign-in').trigger('reset')
  $('.welcome').hide()
  $('#pwform').hide()
  setTimeout(() => $('#message').text(' '), 3000)
}

const signInFailure = function () {
  $('#message').text('Unable to Sign In, Please Try Again.')
  $('#sign-in').trigger('reset')
  setTimeout(() => $('#message').text(' '), 3000)
}

const signOutSuccess = function (response) {
  $('#sign-in-modal').trigger('reset')
  $('#change-pw-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('.messageboard').hide()
  $('#bookshelf').hide()
  $('.welcome').show()
  $('#top-aside').hide()
  setTimeout(() => $('#message').text(' '), 3000)
}

const signOutFailure = function () {
  $('#message').text('Unable to Sign Out, Please Try Again.')
  setTimeout(() => $('#message').text(' '), 3000)
}

const changePwSuccess = function (response) {
  $('#message').text('Changed password successfully!')
  $('#pwform').hide()
  $('#change-pw').trigger('reset')
  setTimeout(() => $('#message').text(' '), 3000)
}

const changePwFailure = function () {
  $('#change-pw').trigger('reset')
  $('#message').text('Unable to Change Your Password. Please Try Again.')
  setTimeout(() => $('#message').text(' '), 3000)
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
