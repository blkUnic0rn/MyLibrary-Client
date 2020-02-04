'use strict'

const authEvents = require('./auth/auth-events')
const events = require('./events')
// const fave = require('./favorites/events')

$(() => {
  $('#top-aside').hide()
  $('#createbookForm').hide()
  $('#updateBookForm').hide()
  authEvents.addHandlers()
  events.addHandlers()
  // fave.addHandlers()
})
