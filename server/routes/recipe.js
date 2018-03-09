const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");
const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../config");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "my-images",
  allowedFormats: ["jpg", "png", "gif"]
});

const parser = multer({ storage });

router.post("/recipe", parser.single("picture"), function(req, res, next) {
  const { file } = req;
  const recipe = new Recipe({
    creator: req.body.creator,
    creatorId: req.body.creatorId,
    title: req.body.title,
    type: req.body.type,
    difficulty: req.body.difficulty,
    budget: req.body.budget,
    steps: req.body.steps,
    picture: file.secure_url,
    advisedDrink: req.body.advisedDrink,
    ingredients: req.body.ingredients
  });
  recipe.save().then(savedRecipe => {
    res.json(savedRecipe);
  });
});

router.get("/recipe", function(req, res, next) {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      res.json(err);
    }
    res.json(recipes);
  });
});

router.get("/recipe/:id", function(req, res, next) {
  const recipeId = req.params.id;

  Recipe.findById(recipeId, (err, recipe) => {
    if (err) {
      res.json(err);
    }
    res.json(recipe);
  });
});

router.delete("/profile/:id", function(req, res, next) {
  const recipeId = req.params.id;

  Recipe.findByIdAndRemove(recipeId, (err, recipe) => {
    if (err) {
      res.json(err);
    }
    res.json(recipe);
  });
});

router.post("/recipe/:id", function(req, res, next) {
  const recipeId = req.params.id;

  const update = {
    title: req.body.title,
    type: req.body.type,
    difficulty: req.body.difficulty,
    budget: req.body.budget,
    steps: req.body.steps,
    advisedDrink: req.body.advisedDrink
  };

  Recipe.findByIdAndUpdate(recipeId, update, (err, recipe) => {
    if (err) {
      res.json(err);
    }
    res.json(update);
  });
});
router.get("/profile", function(req, res, next) {
  Recipe.find({ creatorId: req.query.creatorId }, (err, recipes) => {
    if (err) {
      res.json(err);
    }
    res.json(recipes);
  });
});
module.exports = router;
