'use strict'
const store = require('./store')

const checkReaderStatus = () => {
  if (store.bookcount <= 12) {
    store.readerStatus = 'Amature'
  } else if (store.bookcount > 12 && store.bookcount <= 50) {
    store.readerStatus = 'Average'
  } else if (store.bookcount > 51 && store.bookcount <= 80) {
    store.readerStatus = 'Veracious'
  } else {
    store.readerStatus = 'Super'
  }
  printReaderStatus()
}

const printReaderStatus = () => {
  $('#readerBookcount').text('You have read ' + store.bookcount + ' book(s) so far')
  if (store.readerStatus === 'Amature' || store.readerStatus === 'Average') {
    $('#readerStatus').text('You are an ' + store.readerStatus + ' reader!')
  } else {
    $('#readerStatus').text('You are a ' + store.readerStatus + ' reader!')
  }
}

module.exports = {
  checkReaderStatus
}
