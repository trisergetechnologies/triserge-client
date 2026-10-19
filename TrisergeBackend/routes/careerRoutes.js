const express = require("express");
const router = express.Router();

const { applyJob } = require("../controllers/careerController");
const upload = require("../middleware/upload");
const { validateCareer } = require("../middleware/validateCareers");

router.post("/", upload.single("resume"), validateCareer, applyJob);

module.exports = router;