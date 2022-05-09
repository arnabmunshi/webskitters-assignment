const router = require("express").Router();
const {
  userDetails,
  userUpdate,
} = require("../controllers/userController");
const profilePicUpload = require("../middleware/profilePicUpload")

router.get("/:id", userDetails);
router.put("/:id", profilePicUpload.single('profilePic'), userUpdate);

module.exports = router;
