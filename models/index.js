// Import Models
const User = require('./user');
const Recipe = require('./recipe');
const Review = require('./review');
const Ingredient = require('./ingredient');

// Association Section

// User-Recipe Relationship
User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// User-Review Relationship
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Recipe-Ingredient Relationship
Recipe.hasMany(Ingredient, {
    foreignKey: 'ingredient_id',
    onDelete: 'CASCADE',
});

Ingredient.belongsToMany(Recipe, {
    foreignKey: 'ingredient_id',
    onDelete: 'CASCADE',
});

// Recipe-Review Relationship
Recipe.hasMany(Review, {
    foreignKey: 'recpie_id',
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
};