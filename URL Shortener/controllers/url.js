const shortid = require("shortid")
const URL = require("../models/url")
const express = require("express")

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ Error: "URL is required"});
    
    const shortURL = shortid();

    await URL.create({
        shortID: shortURL,
        redirectID: body.url,
        visitHistory: [],
    })

    return res.json({id: shortURL});
}

async function handleRedirectURL(req, res) {
    const shortID = req.params.shortID;

    const entry = await URL.findOneAndUpdate(
        {
            shortID,
        },
        {
            $push: {
            visitHistory: { timestamps: Date.now() }
            }
        });

        res.redirect(entry.redirectID)
}

async function handleGetAnalyatics(req, res) {
    const shortID = req.params.shortID;
    const result = await URL.findOne({shortID});
    return res.json(
        {
            totalClickes: result.visitHistory.length,
            analytics: result.visitHistory,
        }
    );
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectURL,
    handleGetAnalyatics,
}