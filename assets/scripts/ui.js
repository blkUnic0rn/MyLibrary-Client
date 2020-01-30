'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('#signUpMessage').text('successfully signed up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#signUpMessage').text('sign up failure!')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  $('#signInMessage').text('successfully Signed In!')
  store.user = response.user
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#changepw-modal').show()
  $('#createNewBook').show()
  $('#logout').show()
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('#signInMessage').text('Unable to Sign In!')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#logoutMessage').text('successfully signed out!')
  $('#sign-in-modal').trigger('reset')
  $('#changepw-modal').hide()
  $('#logout').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#createNewBook').hide()
}

const signOutFailure = function () {
  $('#logoutMessage').text('could not sign out!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
