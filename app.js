const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// router version folder
const v1 = require("./src/v1");

// enviroment
dotenv.config();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());

// connect to db
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(`DB connected with host: ${con.connection.host}`);
  })
  .catch((err) => {
    console.log(err.message);
  });

// route middlewares
app.use("/v1", v1);

app.listen(port, () => console.log(`Server running on port ${port}`));
