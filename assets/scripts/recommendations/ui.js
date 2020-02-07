'use strict'

const showRecList = require('./../templates/recList.handlebars')

const onGetRecBooksSuccess = (data) => {
  const myRecommendations = showRecList({
    recommendations: data.recommendations
  })
  $('#bookshelf').html(myRecommendations)
  $('#createbookForm').hide()
}

module.exports = {
  onGetRecBooksSuccess
}
