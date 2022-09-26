'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({PassengerCarCompanies, Seats}) {
      // define association here
      this.hasMany(Seats, {foreignKey: 'vehicleId', as:'vehicle'})
      this.belongsTo(PassengerCarCompanies, {foreignKey: 'pccId', as:'pcc'})
    }
  }
  Vehicles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehicles',
  });
  return Vehicles;
};