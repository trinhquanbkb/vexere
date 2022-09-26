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
    await queryInterface.bulkInsert('passengercarcompanies',
      [
        {
          name: 'Nhà xe Hải Long',
          image: null,
          description: "Đi để trở về",
          tripId: 1,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Hải Long',
          image: null,
          description: "Đi để trở về",
          tripId: 2,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Hải Long',
          image: null,
          description: "Đi để trở về",
          tripId: 3,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Hải Long',
          image: null,
          description: "Đi để trở về",
          tripId: 4,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Hải Long',
          image: null,
          description: "Đi để trở về",
          tripId: 7,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Hải Long',
          image: null,
          description: "Đi để trở về",
          tripId: 8,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Bá Phú',
          image: null,
          description: "Cảm ơn quý khách đã tin tưởng chúng tôi",
          tripId: 5,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Bá Phú',
          image: null,
          description: "Cảm ơn quý khách đã tin tưởng chúng tôi",
          tripId: 6,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Bá Phú',
          image: null,
          description: "Cảm ơn quý khách đã tin tưởng chúng tôi",
          tripId: 7,
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nhà xe Bá Phú',
          image: null,
          description: "Cảm ơn quý khách đã tin tưởng chúng tôi",
          tripId: 8,
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
     await queryInterface.bulkDelete('passengercarcompanies', null, {});
  }
};
