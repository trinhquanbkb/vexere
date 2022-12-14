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
    await queryInterface.bulkInsert('seats',
      [
        {
          name: 'AB_1',
          vehicleId: 1,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'AB_2',
          vehicleId: 2,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'AB_3',
          vehicleId: 3,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'AB_4',
          vehicleId: 4,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'AB_5',
          vehicleId: 5,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'TD_1',
          vehicleId: 6,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'TD_2',
          vehicleId: 7,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'TD_3',
          vehicleId: 8,
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
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
     queryInterface.bulkDelete('seats', null, {});
  }
};
