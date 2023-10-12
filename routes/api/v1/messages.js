//require express
const express = require('express');

//create router
const router = express.Router();

router.post("/", (req, res) => {
    let message = req.body.message;
    let user = req.body.user;

    res.json({
        status: "success",
        message: `POST ${message} for user ${user}`,
    });
});

router.put("/", (req, res) => {
    const id = req.query.id;
    const message = req.body.message;

    res.json({
        status: "success",
        message: `PUT ${message} with id ${id}`,
    });
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;

    res.json({
        status: "success",
        message: `DELETE message with id ${id}`,
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