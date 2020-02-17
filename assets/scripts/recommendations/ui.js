'use strict'

const showRecList = require('./../templates/recList.handlebars')
const addRecBook = require('./../templates/createRecBook.handlebars')
const store = require('./../store.js')

const onGetRecBooksSuccess = (data) => {
  const myRecommendations = showRecList({
    recommendations: data.recommendations
  })
  $('#bookshelf').html(myRecommendations)
  $('#createbookForm').hide()
}

const onGetaBookSuccess = (data) => {
  store.currentbook = data
  console.log(store.currentbook)
  const newRecBook = addRecBook({
    recommendation: data.recommendation
  })
  $('#bookshelf').html(newRecBook)
}

module.exports = {
  onGetRecBooksSuccess,
  onGetaBookSuccess
}
