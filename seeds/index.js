const sequelize = require('../config/connection');
const { Recipe, User, Ingredient, RecipeIngredients, Review } = require('../models');

const recipes = require('./recipe.json');
const users = require('./user.json');
const ingredients = require('./ingredients.json');
const recipeIngredients = require('./recipe-ingredients.json');
const favourites = require('./favourites.json');
const Favourites = require('../models/favourites');
const reviews = require('./reviews.json');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(users, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipes, {
    individualHooks: true,
    returning: true,
  });

  await Ingredient.bulkCreate(ingredients, {
    individualHooks: true,
    returning: true,
  });


  await RecipeIngredients.bulkCreate(recipeIngredients, {
    individualHooks: true,
    returning: true,
  });

  await Favourites.bulkCreate(favourites, {
    individualHooks: true,
    returning: true,
  });

  await Review.bulkCreate(reviews, {
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedAll();