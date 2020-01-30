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
  // $('change-pw').show()
  // $('#createNewBook').show()
  // $('#logout').show()
  $('#top-aside').show()
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('#signInMessage').text('Unable to Sign In!')
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#logoutMessage').text('successfully signed out!')
  $('#sign-in-modal').trigger('reset')
  $('#change-pw').hide()
  $('#logout').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#createNewBook').hide()
}

const signOutFailure = function () {
  $('#logoutMessage').text('could not sign out!')
}

const changePwSuccess = function (response) {
  console.log('success')
  // $('#change-pw').trigger('reset')
}

const changePwFailure = function () {
  // $('#change-pw').trigger('reset')
  console.log('fail')
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
