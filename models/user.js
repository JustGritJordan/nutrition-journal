// Basic USER ID, Name, password, email, and meals
// Meals will reference meals table, to be an array of all meals
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Trip model
class User extends Model {}

// create fields/columns for Trip model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
   meal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'meals',
        key: 'id',
        unique: false
      }
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;