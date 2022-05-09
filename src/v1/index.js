const express = require("express");
const authRoutes = require("../../routes/authRoutes");
const userRoutes = require("../../routes/userRoutes");
const categoryRoutes = require("../../routes/categoryRoutes");
const questionRoutes = require("../../routes/questionRoutes");
// const { verifyAccessToken } = require("../../helpers/jwtHelper");

const app = express();

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/questions", questionRoutes);

/*app.use("/", verifyAccessToken, async (req, res, next) => {
  res.send("/");
});*/

module.exports = app;
