const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "cdn/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const csvUpload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype == "text/csv") {
      callback(null, true);
    } else {
      console.log("Only CSV file supported");
      callback(null, false);
    }
  },
});

module.exports = csvUpload;
