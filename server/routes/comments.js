const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const Recipe = require("../models/recipe");

router.post("/", (req, res, next) => {
  const comment = new Comment({
    description: req.body.comment,
    recipeId: req.body.recipeId,
    creatorId: req.body.creatorId
  });
  comment.save().then(savedComment => {
    console.log(savedComment);
    Recipe.findByIdAndUpdate(req.body.recipeId, {
      $push: { comments: savedComment._id }
    })
      .exec()
      .then(recipe => {
        res.json(savedComment);
      });
    //return res.redirect("/home");
  });
});
router.get("/", (req, res, next) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      res.json(err);
    }
    res.json(comments);
  });
});
router.get("/:recipeId", (req, res, next) => {
  Comment.find({ recipeId: req.params.recipeId }, (err, comments) => {
    if (err) {
      res.json(err);
    }
    res.json(comments);
  });
});

module.exports = router;
