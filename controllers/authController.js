const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  userRegistration: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
      });

      const user = await newUser.save();

      const { password, ...other } = user._doc;
      res.status(201).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  userLogin: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(400).json("Wrong credentials");

      const validate = await bcrypt.compare(req.body.password, user.password);
      !validate && res.status(400).json("Wrong credentials");

      const { password, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
