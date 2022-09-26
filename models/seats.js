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
    static associate({Tickets, Vehicles}) {
      // define association here
      this.belongsTo(Tickets, { foreignKey: 'seatId', as: 'seat' })
      this.belongsTo(Vehicles, {foreignKey: 'vehicleId', as:'vehicle'})
    }
  }
  Seats.init({
    name: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Seats',
  });
  return Seats;
};