const router = require("express").Router();
const {
  userRegistration,
  userLogin,
} = require("../controllers/authController");

router.post("/user/registration", userRegistration);
router.post("/user/login", userLogin);

module.exports = router;
