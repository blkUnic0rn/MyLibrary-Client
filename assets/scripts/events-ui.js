'use strict'
const store = require('./store')

const onCreateBookSuccess = response => {
  store.book = response.book
  $('#createbookForm').hide()
  console.log('new book created')
}

const onCreateBookFailure = response => {
  console.log('could not create book')
}

module.exports = {
  onCreateBookSuccess,
  onCreateBookFailure
}
