//require express
const express = require('express');

//create router
const router = express.Router();

router.post("/", (req, res) => {
    let message = req.body.message;

    res.json({
        status: "success",
        message: `POST ${message}`,
    });
});

router.get("/", (req, res) => {
    const username = req.query.user;
    const id = req.query.id;

    if (username) {
        res.json({
            status: "success",
            message: `GET messages with username ${username}`,
        });
    } else if (id) {
        res.json({
            status: "success",
            message: `GET messages with id ${id}`,
        });
    } else {
        res.json({
            status: "success",
            message: "GET all messages",
        });
    }
});

module.exports = router;