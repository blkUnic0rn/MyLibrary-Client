'use strict'

const authEvents = require('./auth/auth-events')
const events = require('events.js')

$(() => {
  $('#top-aside').hide()
  $('#bookshelf').hide()
  authEvents.addHandlers()
  events.addHandlers()
})
