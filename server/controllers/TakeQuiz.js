const mongoose = require("mongoose");
const Quiz = require("../models/quiz");

const readQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.find();
    res.status(200).json(quiz);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const readUserQuizes = async (req, res) => {
  const userid = req.params.uid;
  try {
    const quiz = await Quiz.find({ creatorId: userid });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteUserQuizes = async (req, res) => {
    try {
        const _id = req.params.id;
       
        const data = await Quiz.findByIdAndRemove(_id);
        if (!_id) {
          return res.status(400).send();
        } else {
          res.status(200).send(data);
        }
      } catch (error) {
        res.status(500).send(error);
      }
  };

exports.readQuiz = readQuiz;
exports.deleteUserQuizes = deleteUserQuizes;
exports.readUserQuizes = readUserQuizes;
