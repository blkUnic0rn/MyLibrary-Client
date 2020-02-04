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
  console.log(store.readerStatus)
}

module.exports = {
  checkReaderStatus
}
