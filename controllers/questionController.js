const Question = require("../models/questionModel");

module.exports = {
  createQuestion: async (req, res) => {
    let categories = req.body.categories.split(",");
    categories = categories.map((item) => {
      return item.trim();
    });

    try {
      const newQuestion = new Question({
        title: req.body.title,
        categories: categories,
      });

      const question = await newQuestion.save();
      res.status(201).json(question);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getQuestions: async (req, res) => {
    const category = req.query.category;
    let questions;
    try {
      if (category) {
        questions = await Question.find({
          categories: {
            $in: [category]
          }
        }).sort('-createdAt');
      } else {
        questions = await Question.find().sort('-createdAt');
      }

      res.status(200).json(questions);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
