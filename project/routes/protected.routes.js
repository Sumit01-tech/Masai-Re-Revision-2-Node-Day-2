const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
    res.send("Protected data accessed");
});

module.exports = router;
