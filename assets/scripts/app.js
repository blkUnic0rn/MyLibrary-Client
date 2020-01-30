'use strict'

const authEvents = require('./auth/auth-events')

$(() => {
  $('#top-aside').hide()
  $('#bookshelf').hide()
  authEvents.addHandlers()
})
