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
          password: '$2a$10$kaHMMnOw8eKM8gMobWy8puBp7.23/U.go.FB6jRJOjlO7ufUbt3mu',
          type: 'admin',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nguyễn Hoàng Việt',
          email: 'viet123@gmail.com',
          numberPhone: '0942345743',
          password: '$2a$10$fvjiLG2gacLNFcIFj3OzIuDvoYZLWBnUPH.EUaZ/DOMZKKdXNHF.2',
          type: 'user',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Đào Bá Lộc',
          email: 'loctester@gmail.com',
          numberPhone: '0945671434',
          password: '$2a$10$XwmquBFyPsqqWHnTLHpPJ.vyNFVDia3Kj1A/Zob9TdzzIQxKfgcEG',
          type: 'user',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Nguyễn Tường Vi',
          email: 'svis@gmail.com',
          numberPhone: '0327535463',
          password: '$2a$10$diM0GjEZ8gafBzT9BLjWK.cwdgFjpHrYoZqK76MRhDiccNgRqaf4q',
          type: 'user',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Trịnh Hữu Tùng',
          email: 'stungdb@gmail.com',
          numberPhone: '0427456896',
          password: '$2a$10$k4lrBsQoGelfQaNtz.J79uIeVWSKhJK1pVsl4b.qmh0OJkT.1oLk6',
          type: 'user',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
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
