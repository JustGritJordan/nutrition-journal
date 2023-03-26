// Each meal entry will contain user ID
// Will also contain time stamp of meal
// WIll include calories of specific meal
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Traveller model
class Meals extends Model {}

// create fields/columns for Traveller model
Meals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    calories: {
        type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meals'
  }
);

module.exports = Meals;