'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tickets',
      [
        {
          tripId: 1,
          userId: null,
          status: 0,
          seatId:null,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          tripId: 2,
          userId: null,
          status: 0,
          seatId:null,
          createdAt: '2022-09-17 10:51:57',
          updatedAt: '2022-09-17 10:51:57'
        },
        {
          tripId: 4,
          userId: null,
          status: 0,
          seatId:null,
          createdAt: '2022-09-18 10:53:57',
          updatedAt: '2022-09-18 10:54:57'
        },
        {
          tripId: 2,
          userId: null,
          status: 0,
          seatId:null,
          createdAt: '2022-09-16 10:52:57',
          updatedAt: '2022-09-16 10:54:57'
        },
        {
          tripId: 6,
          userId: null,
          status: 0,
          seatId:null,
          createdAt: '2022-09-11 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          tripId: 7,
          userId: null,
          status: 0,
          seatId:null,
          createdAt: '2022-09-22 10:51:57',
          updatedAt: '2022-09-23 14:51:57'
        },
        {
          tripId: 1,
          userId: null,
          status: 0,
          seatId:null,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tickets', null, {});
  }
};