const mongoose = require('mongoose');

const dnaSchema = mongoose.Schema({

    dnaString:{
        type: String,
        required:true,
        unique:true,
    },
    mutation:{
        type:Boolean,
        required:true
    }



},
{
timestamps: false,
})


const  Dna = mongoose.model('Dna',dnaSchema);

module.exports = Dna;