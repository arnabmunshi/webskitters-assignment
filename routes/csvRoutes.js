const router = require("express").Router();
const { csvImport } = require("../controllers/csvController");
const csvUpload = require("../middleware/csvUpload");

router.post("/", csvUpload.single("csvFile"), csvImport);

module.exports = router;
