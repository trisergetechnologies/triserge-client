const express = require("express");
const router = express.Router();

const { createSell } = require("../controllers/sellController");

router.post("/", createSell);

module.exports = router;