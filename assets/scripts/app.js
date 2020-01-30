'use strict'

const authEvents = require('./auth/auth-events')

$(() => {
  // $('#change-pw').hide()
  // $('#createNewBook').hide()
  // $('#logout').hide()
  $('#top-aside').hide()
  authEvents.addHandlers()
})
