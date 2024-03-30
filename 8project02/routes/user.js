const express = require("express");
const router = express.Router();

const {handleGetAllUsers, handleGetUserByID, handleUpdateUserByID, handleDeleteUserByID, handleCreateUsers} = require("../controllers/user")

// REST API'S

router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateUsers)

router
    .route("/:id")
    .get(handleGetUserByID)
    .patch(handleUpdateUserByID)
    .delete(handleDeleteUserByID)

module.exports = router;