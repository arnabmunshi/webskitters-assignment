const router = require("express").Router();
const {
  createCategory,
  allCategory,
  categoryWiseQuestions,
} = require("../controllers/categoryController");

router.post("/", createCategory);
router.get("/", allCategory);
router.get("/questions", categoryWiseQuestions);

module.exports = router;
