'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerCarCompanies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trips, Vehicles}) {
      // define association here
      this.belongsTo(Trips, {foreignKey: 'tripId', as: 'trippcc'})
      this.hasMany(Vehicles, {foreignKey: 'pccId', as:'pcc'})
    }
  }
  PassengerCarCompanies.init({
    name: {
      type: DataTypes.STRING,
    },
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PassengerCarCompanies',
  });
  return PassengerCarCompanies;
};