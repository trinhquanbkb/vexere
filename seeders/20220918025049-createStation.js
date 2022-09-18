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
    await queryInterface.bulkInsert('stations',
      [
        {
          name: 'Bến xe Gia Lâm',
          address: 'Xe buýt 03, 22, 34 vào- ra xe Gia Lâm Bến, Long Biên, Hà Nội',
          province: 'thành phố Hà Nội',
          createdAt: '2022-09-15 10:28:20',
          updatedAt: '2022-09-15 10:30:39'
        },
        {
          name: 'Bến xe Giáp Bát',
          address: 'Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội',
          province: 'thành phố Hà Nội',
          createdAt: '2022-09-16 02:23:32',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'Bến xe Mỹ Đình',
          address: 'Mỹ Đình, Nam Từ Liêm, Hà Nội',
          province: 'thành phố Hà Nội',
          createdAt: '2022-09-16 02:24:21',
          updatedAt: '2022-09-16 02:23:32'
        },
        {
          name: 'Bến xe Yên Nghĩa',
          address: 'QL6, Phú Lâm, Hà Đông, Hà Nội',
          province: 'thành phố Hà Nội',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Bến xe Miền Đông',
          address: 'Khu công nghiệp, Cần Giuộc, Long An',
          province: 'thành phố Hồ Chí Minh',
          createdAt: '2022-09-16 10:51:57',
          updatedAt: '2022-09-16 10:51:57'
        },
        {
          name: 'Bến xe miền tây Kinh Dương Vương',
          address: '395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh',
          province: 'thành phố Hồ Chí Minh',
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
     await queryInterface.bulkDelete('stations', null, {});
  }
};
