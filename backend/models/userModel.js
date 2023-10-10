const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        },
    password: {
        type: String,
        required: true,
        },
});

// Static signup method
userSchema.statics.signup = async function(email, password) {
    if (!email || !password){
        throw new Error('Email and password required');
    }

    if (!validator.isEmail(email)){
        throw new Error('Email not valid');
    }

    if(!validator.isStrongPassword(password)){
        throw new Error('Password not strong enough');
    }

    const exists = await this.findOne({email});

    if (exists) {
        throw new Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hashedPassword});

    return user;
}

module.exports = mongoose.model('User', userSchema);