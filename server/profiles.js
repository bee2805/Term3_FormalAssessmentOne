const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    }, 
    occupation: {
        type: String,
        required: true
    },
    profile: [
        {
            age:{
                type: Number,
                required: true
            },
            sex: {
                type: String,
                required: true
            },
            height: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: true
            },
            BMI: {
                type: Number,
                required: true
            }, // calculate this on entry 
            eyeColor: {
                type: String,
                required: true
            },
            incomePM: {
                type: Number,
                required: true
            }, 
            interestedIn: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model('Profiles', profileSchema);