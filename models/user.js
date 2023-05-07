// Basic USER ID, Name, password, email, and meals
// Meals will reference meals table, to be an array of all meals
const { Model, DataTypes } = require('sequelize');
const bcrypt =require('bcrypt');
const { sequelize } = require('../config/connection');

class User extends Model {}

User.init(
  {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
},
{
  hooks: {
    beforeCreate: async(newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10)
    }
  },
  sequelize,
}
);
  
  module.exports = User;
  // {
  //   id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true
  //   },
  //   name: {
  //     type: DataTypes.STRING,
  //     allowNull: true
  //   },
  //   email: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     unique: true,
  //     validate: {
  //       isEmail: true
  //     }
  //   },
  //  meal_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: 'meals',
  //       key: 'id',
  //       unique: false
  //     }
  //   },
  //   password: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       len: [4]
  //     }
  //   }

   
  // },
  // {
  //   sequelize,
  //   timestamps: false,
  //   freezeTableName: true,
  //   underscored: true,
  //   modelName: 'user'
  // }