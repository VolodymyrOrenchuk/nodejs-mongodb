const mongoose = require('mongoose')

const addUserTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    avatarUrl:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('mytable',addUserTemplate)