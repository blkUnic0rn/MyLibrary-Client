'use strict'

const authEvents = require('./auth/auth-events')

$(() => {
  $('#changepw-modal').hide()
  $('#createNewBook').hide()
  $('#logout').hide()
  authEvents.addHandlers()
})
