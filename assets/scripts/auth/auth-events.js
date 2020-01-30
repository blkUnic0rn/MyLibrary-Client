'use strict'
const api = require('./../api')
const ui = require('./../ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePw = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.changePw(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#logout').on('click', onSignOut)
  $('#change-pw').on('submit', onChangePw)
  $('#sign-up-modal').on('click', function (e) {
    e.preventDefault()
  })
  $('#sign-in-modal').on('click', function (a) {
    a.preventDefault()
  })
}

module.exports = {
  addHandlers
}
