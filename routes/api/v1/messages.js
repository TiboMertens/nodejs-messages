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

router.put("/:id", (req, res) => {
    const id = req.params.id;
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
    } else {
        res.json({
            status: "success",
            message: "GET all messages",
        });
    }
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        status: "success",
        message: `GET message with id ${id}`,
    });
});

module.exports = router;