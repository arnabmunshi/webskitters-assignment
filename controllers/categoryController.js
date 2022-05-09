const Category = require("../models/categoryModel");
const Question = require("../models/questionModel");

module.exports = {
  createCategory: async (req, res) => {
    try {
      const newCategory = new Category({
        title: req.body.title,
      });

      const category = await newCategory.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  allCategory: async (req, res) => {
    try {
      const categories = await Category.find().sort('-createdAt');
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  categoryWiseQuestions: async (req, res) => {
    try {
      const categories = await Category.find().sort('-createdAt');

      for(let i=0; i<categories.length; i++) {
        const category = categories[i].title;

        const questions = await Question.find({
          categories: {
            $in: [category]
          }
        }).sort('-createdAt');
        
        categories[i] = {...categories[i]._doc, questions};
      }

      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
