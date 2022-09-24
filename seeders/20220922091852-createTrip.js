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
    await queryInterface.bulkInsert('trips',
      [
        {
          startTime: "2022-09-22 03:30:00",
          price: 130000,
          fromStation: 1,
          toStation: 3,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          startTime: "2022-09-21 03:00:00",
          price: 150000,
          fromStation: 4,
          toStation: 1,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          startTime: "2022-09-21 10:00:00",
          price: 100000,
          fromStation: 2,
          toStation: 5,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          startTime: "2022-09-21 00:00:00",
          price: 100000,
          fromStation: 3,
          toStation: 6,
          createdAt: '2022-09-15 10:28:20',
          updatedAt: '2022-09-15 10:30:39'
        },
        {
          startTime: "2022-09-22 06:00:00",
          price: 120000,
          fromStation: 4,
          toStation: 5,
          createdAt: '2022-09-15 10:28:20',
          updatedAt: '2022-09-15 10:30:39'
        },
        {
          startTime: "2022-09-22 08:00:00",
          price: 120000,
          fromStation: 1,
          toStation: 3,
          createdAt: '2022-09-16 02:24:21',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          startTime: "2022-09-22 8:00:00",
          price: 150000,
          fromStation: 1,
          toStation: 2,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          startTime: "2022-09-22 6:00:00",
          price: 120000,
          fromStation: 3,
          toStation: 5,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        }, {
          startTime: "2022-09-22 15:00:00",
          price: 80000,
          fromStation: 3,
          toStation: 1,
          createdAt: '2022-09-16 02:24:21',
          updatedAt: '2022-09-16 02:23:32'
        },
      ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
