'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('#signUpMessage').text('successfully signed up!')
  // $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#signUpMessage').text('sign up failure!')
  // $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  $('#signInMessage').text('successfully Signed In!')
  store.user = response.user
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
}

const signInFailure = function () {
  $('#signInMessage').text('Unable to Sign In!')
  // $('#sign-in').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
