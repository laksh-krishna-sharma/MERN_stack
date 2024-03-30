const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function handleCreateUsers(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ message: 'All fields are required...' });
    }

    else {
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            jobTitle: body.job_title,
            gender: body.gender,
        });

        return res.status(201).json({ message: "success", id: result._id});
    }
}

async function handleGetUserByID(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {return res.status(404).json({ status: "error", message: "User not found" });}
    return res.json(user);
}

async function handleUpdateUserByID(req, res) {
    await User.findByIdAndUpdate(req.params.id, {lastName: " "});
    return res.json( {message: "success"} );
}

async function handleDeleteUserByID(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json( {message: "success"} )
}


module.exports = {
    handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateUsers,
}