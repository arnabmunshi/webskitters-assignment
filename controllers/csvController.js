const Question = require("../models/questionModel");
const csv = require('csvtojson')

module.exports = {
  csvImport: async (req, res) => {
    if (req.file) {
      const jsonObj = await csv().fromFile(req.file.path);
      
      let csvData = [];
      for (let x=0; x<jsonObj.length; x++) {
        let obj = {};
        let title = jsonObj[x].question;
        let categories = jsonObj[x].categories.split(",");
        categories = categories.map((item) => {
          return item.trim();
        });
        
        obj.title = title;
        obj.categories = categories;
        csvData.push(obj);
      }

      try {
        const questions = await Question.insertMany(csvData);
        res.status(201).json(questions);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  },
};
