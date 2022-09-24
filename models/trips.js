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
    static associate({Stations, Tickets, PassengerCarCompanies}) {
      this.belongsTo(Stations, {foreignKey: 'fromStation', as: 'fromstation'})
      this.belongsTo(Stations, {foreignKey: 'toStation', as: 'tostation'})
      this.hasMany(Tickets, {foreignKey: 'tripId', as: 'triptk'})
      this.hasMany(PassengerCarCompanies, {foreignKey: 'tripId', as: 'trippcc'})
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