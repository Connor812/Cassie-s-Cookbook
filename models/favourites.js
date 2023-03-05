const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Favourites extends Model { }

Favourites.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipe',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favourites',
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'recipe_id']
      }
    ]
  }
);

module.exports = Favourites;