const express = require("express");
const router = express.Router();
const { chatHandler } = require("../controllers/chatController");

router.post("/msg", chatHandler);

module.exports = router;