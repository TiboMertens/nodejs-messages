//require express
const express = require('express');

//create router
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "GET messages",
    })
});

router.post("/", (req, res) => {
    let message = req.body.message;

    res.json({
        status: "success",
        message: `POST ${message}`,
    });
});

module.exports = router;