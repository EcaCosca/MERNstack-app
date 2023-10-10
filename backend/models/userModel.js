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

userSchema.statics.login = async function(email, password) {
    if (!email || !password){
        throw new Error('Email and password required');
    }

    const user = await this.findOne({email});
    if (!user){
        throw new Error('Incorrect email');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
        throw new Error('Password does not match');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);