// Import Models
const User = require('./user');
const Recipe = require('./recipe');
const Review = require('./review');
const Ingredient = require('./ingredient');
const RecipeIngredients = require('./recipe-ingredients');

// Association Section

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Recipe-Ingredient Relationship
Ingredient.belongsToMany(Recipe, {
    foreignKey: 'ingredient_id',
    through: {
        model: RecipeIngredients
    }
});

Recipe.belongsToMany(Ingredient, {
    foreignKey: 'recipe_id',
    through: {
        model: RecipeIngredients
    }
});

// Recipe-Review Relationship
Recipe.hasMany(Review, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
    onDelete: 'CASCADE',
});

// Export Section
module.exports = {
    User,
    Recipe,
    Review,
    Ingredient,
    RecipeIngredients
};