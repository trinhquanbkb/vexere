'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stations}) {
      this.belongsTo(Stations, {foreignKey: 'fromStation', as: 'fromstation'})
      this.belongsTo(Stations, {foreignKey: 'toStation', as: 'tostation'})
    }
  }
  Trips.init({
    startTime: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Trips',
  });
  return Trips;
};