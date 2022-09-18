'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stations.init({
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true
    },
    address: DataTypes.STRING,
    province: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isIn: [['thành phố Hà Nội', 'thành phố Hồ Chí Minh']]
      }
    }
  }, {
    sequelize,
    modelName: 'Stations',
  });
  return Stations;
};