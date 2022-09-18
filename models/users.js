'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    numberPhone: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [10, 10],
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6, 20]
      }
    },
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};