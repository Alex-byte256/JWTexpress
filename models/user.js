const {Schema, model} = require('mongoose');

const schema = Schema({
    email:{
        type: String,
        unique: true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"User email is not valid"]
    },
    password:{
        type: String,
        minlength: [6,"Password must be at least 6 characters"]
    }
},{
    timestamps: true,
    versionKey: false
})

const User = model('user', schema);

module.exports = User;