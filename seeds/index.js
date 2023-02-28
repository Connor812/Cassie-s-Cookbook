const sequelize = require('../config/connection');
const { Recipe, User } = require('../models');

const recipes = require('./recipe.json');
const users = require('./user.json');

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
  
  process.exit(0);
};

seedAll();