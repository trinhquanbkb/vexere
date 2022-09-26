'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tripId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'trips',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      seatId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'seats',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 0                   //0 nếu chưa đặt và chuyển thành 1 nếu đã được đặt
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};

