'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('.messageboard').append('Successfully Signed Up!')
  $('.messageboard').fadeOut(5600).append('').fadeIn()
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('.messageboard').append('Unable to Sign You Up, Please Try Again.')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  $('.messageboard').append('Successfully Signed In!')
  $('.messageboard').fadeOut(5600).append('').fadeIn()
  store.user = response.user
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#top-aside').show()
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('.messageboard').append('Unable to Sign In, Please Try Again.')
  $('.messageboard').fadeOut(5600).append('').fadeIn()
  $('#sign-in').trigger('reset')
}

const signOutSuccess = function (response) {
  $('.messageboard').append('Successfully Signed Out!')
  $('.messageboard').fadeOut(5600).append('').fadeIn()
  $('#sign-in-modal').trigger('reset')
  $('#change-pw').hide()
  $('#logout').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#createNewBook').hide()
  $('showbooks').hide()
}

const signOutFailure = function () {
  $('.messageboard').append('Unable to Sign Out, Please Try Again.')
  $('.messageboard').fadeOut(5600).append('').fadeIn()
}

const changePwSuccess = function (response) {
  $('.messageboard').append('Password Successfully Changed')
  $('.messageboard').fadeOut(5600).append('').fadeIn()
  $('.messageboard').append('')
  $('#change-pw').trigger('reset')
}

const changePwFailure = function () {
  $('#change-pw').trigger('reset')
  $('.messageboard').append('Unable to Change Your Password. Please Try Again.')
  $('.messageboard').fadeOut(5600).append('').fadeIn()
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
