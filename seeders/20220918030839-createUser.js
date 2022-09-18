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
    await queryInterface.bulkInsert('users',
      [
        {
          name: 'Trịnh Hoàng Quân',
          email: 'quan20028a3kb@gmail.com',
          numberPhone: '0327393234',
          password: 'Tester123',
          type: 'admin',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nguyễn Hoàng Việt',
          email: 'viet123@gmail.com',
          numberPhone: '0942345743',
          password: 'Tester123',
          type: 'user',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Đỗ Tường Vy',
          email: 'haoquan12bc@gmail.com',
          numberPhone: '0975869443',
          password: 'Tester123',
          type: 'user',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        }
      ]
      , {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
