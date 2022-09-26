'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Trips, Seats }) {
      this.belongsTo(Trips, { foreignKey: 'tripId', as: 'triptk' })
      this.belongsTo(Users, { foreignKey: 'userId', as: 'user' })
      this.hasMany(Seats, { foreignKey: 'seatId', as: 'seat' })
    }
  }
  Tickets.init({
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0                   //0 nếu chưa đặt và chuyển thành 1 nếu đã được đặt
    }
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};