import mongoose from 'mongoose';

/**
 * Defining user schema
 * @type {mongoose.Schema}
 */
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_image: String
}, {
    timestamps: true
});

/**
 * Creating user collection
 */
const User = mongoose.model('User', user);

/**
 * Exporting module
 */
export default User;