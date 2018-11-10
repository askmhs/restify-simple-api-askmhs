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
    }
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