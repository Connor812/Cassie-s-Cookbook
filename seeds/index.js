const sequelize = require('../config/connection');
const Recipe = require('../models');
const recipes = require('./recipe.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Recipe.bulkCreate(recipes, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();