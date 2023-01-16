const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const confirmUserData = asyncHandler((res, data) => {
    // confirm data
    const { firstName, lastName, userName, email, password } = data;
    if (!firstName || !lastName) {
        console.log('first and last name are required');
        res.status(400).json({ message: 'first and last name are required' });
        return false;
    }

    if (!password || !userName) {
        console.log('username and password are required');
        res.status(400).json({ message: 'username and password are required' });
        return false;
    }

    if (!email) {
        console.log('email required');
        res.status(400).json({ message: 'email required' });
        return false;
    }
    return true;
});

const createNewUser = async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;
    if (!confirmUserData(res, { firstName, lastName, userName, email, password })) return;

    // check for duplicates
    const existingUser = await User.findOne({ userName: userName }).exec();
    if (existingUser) {
        return res.status(409).json({ message: `user with username ${userName} already exists!` });
    }

    // create new user 
    const hashedPassword = await bcrypt.hash(password, 10);
    User.create({
        firstName,
        lastName,
        userName,
        email,
        "password": hashedPassword
    }, function (err, obj) {
        if (err) {
            res.status(400).json({ "message": "invalid user information" });
        } else {
            res.json({ "message": `New user with username "${userName}" created` });
            console.log(`New user ${obj} created!`);
        }
    });
}

const updateUser = asyncHandler(async (req, res) => {
    const { id, firstName, lastName, userName, email, password } = req.body;

    // confirm data
    if (!id || !firstName || !lastName || !password || !userName || !email) {
        console.log('all fields are required');
        return res.status(400).json({ message: 'all fields are required' });
    }

    const user = await User.findById(id).exec();
    if (!user) {
        return res.status(400).json({ message: 'user not found' });
    }

    // find duplicates
    const duplicate = await User.findOne({ userName: userName }).exec();
    if (duplicate && duplicate?._id?.toString() !== id) {
        console.log(duplicate);
        return res.status(409).json({ message: 'duplicate username' });
    }

    // update fields
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.userName = userName;

    if (password) {
        user.password = await bcrypt.hash(password, 10);
    }

    res.send(`user with id ${id} updated successfully`);
});

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'user ID required' });
    } else if (id.length != 24) {
        return res.status(400).json({ message: 'invalid id string' });
    }

    try {
        const user = User.findById(id).exec();
        if (!user) {
            return res.status(400).json({ message: 'user not found' });
        }
        const result = await User.deleteOne({ _id: id });
        res.json(`user with username ${result.userName} deleted`);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = {
    createNewUser: createNewUser,
    updateUser: updateUser,
    deleteUser: deleteUser
};
