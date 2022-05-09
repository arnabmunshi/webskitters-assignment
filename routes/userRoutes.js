const router = require("express").Router();
const {
  userDetails,
  userUpdate,
} = require("../controllers/userController");

router.get("/:id", userDetails);
router.put("/:id", userUpdate);

module.exports = router;
