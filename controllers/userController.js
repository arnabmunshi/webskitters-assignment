const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  userDetails: async (req, res) => {
    try {
      const user = await User.findById(
        req.params.id
      );

      const { password, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  userUpdate: async (req, res) => {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      const { password, ...other } = updateUser._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
