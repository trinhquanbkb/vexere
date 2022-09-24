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
    static associate({Trips}) {
      // define association here
      this.belongsTo(Trips, {foreignKey: 'tripId', as: 'trippcc'})
    }
  }
  PassengerCarCompanies.init({
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PassengerCarCompanies',
  });
  return PassengerCarCompanies;
};