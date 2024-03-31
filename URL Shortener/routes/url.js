const express = require("express");
const router = express.Router();

const {handleGenerateNewShortURL, handleRedirectURL, handleGetAnalyatics} = require("../controllers/url");

router.post("/",handleGenerateNewShortURL);

router.get("/:shortID",handleRedirectURL);

router.get("/analytics/:shortID",handleGetAnalyatics);

module.exports = router;