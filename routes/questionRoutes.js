const router = require("express").Router();
const {
  createQuestion,
  getQuestions
} = require("../controllers/questionController");

router.post("/", createQuestion);
router.get("/", getQuestions);

module.exports = router;
