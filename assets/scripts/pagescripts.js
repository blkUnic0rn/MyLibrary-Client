'use strict'
const store = require('./store')

const checkReaderStatus = () => {
  if (store.bookcount <= 12) {
    store.readerStatus = 'amateur'
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
  store.user.given_name = store.user.given_name.charAt(0).toUpperCase() + store.user.given_name.slice(1)
  $('#readerBookcount').text(store.user.given_name + ' you have read ' + store.bookcount + ' book(s) so far')
  if (store.readerStatus === 'Amature' || store.readerStatus === 'Average') {
    $('#readerStatus').text(store.user.given_name + ' you are an ' + store.readerStatus + ' reader!')
  } else {
    $('#readerStatus').text(store.user.given_name + ' you are a ' + store.readerStatus + ' reader!')
  }
}

module.exports = {
  checkReaderStatus
}
