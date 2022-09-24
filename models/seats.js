'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seats.init({
    name: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,          //0 is empty, 1 is not empty
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Seats',
  });
  return Seats;
};