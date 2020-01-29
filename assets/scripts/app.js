'use strict'

const authEvents = require('./auth/auth-events')

$(() => {
  authEvents.addHandlers()
})
