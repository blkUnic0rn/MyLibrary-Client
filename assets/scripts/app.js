'use strict'

const authEvents = require('./auth/auth-events')
const events = require('./events')

$(() => {
  $('#top-aside').hide()
  $('#bookshelf').hide()
  $('#createbookForm').hide()
  authEvents.addHandlers()
  events.addHandlers()
})
