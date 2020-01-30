'use strict'
const api = require('./../api')
const ui = require('./../ui')
const getFormFields = require('./../../../lib/get-form-fields')




const addHandlers = () => {
  $('$bookshelf').on('click', onClickCreate)
}


module.exports = {
  addHandlers
}
