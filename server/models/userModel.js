const mongoose = require("mongoose");
const connection = mongoose.connection;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: [true, "first name required"], maxLength: 100 },
    lastName: { type: String, required: [true, "last name required"], maxLength: 100 },
    userName: { type: String, required: [true, "username required"], maxLength: 20 },
    email: { type: String, required: [true, "email required"] },
    password: { type: String, required: [true, "password required"] }
})

// Export model
module.exports = connection.model("User", UserSchema);