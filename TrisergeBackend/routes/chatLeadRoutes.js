
const express = require("express");

const router = express.Router();

const {
  createChatLead,
} = require("../controllers/chatLeadController");

router.post("/lead", createChatLead);

module.exports = router;

