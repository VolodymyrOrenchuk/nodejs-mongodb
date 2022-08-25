const mongoose = require('mongoose')
// const moment = require('moment')

const addNewsTemplate  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        // default: moment().format('MMMM Do YYYY, h:mm:ss a')
        default: Date.now()
    }
})

module.exports = mongoose.model('mynews', addNewsTemplate)