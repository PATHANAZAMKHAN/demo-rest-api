const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    Topic: {
        type : String,
        maxLength: 30
    },
    Text:{
        type :String,
        required: true        
    },
    createdAt:{
        type : Date,
        default : Date.now()
    },

})

const notesModel = mongoose.model("NotesData", notesSchema)

module.exports = notesModel 