"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Lop_hocs", [
      {
        Ma_lop: "DI19Y1A1",
        Ten_lop_hoc: "Tin học Ứng Dụng"
      },
      {
        Ma_lop: "DI19V1A1",
        Ten_lop_hoc: "Công nghệ thông tin A1"
      },
      {
        Ma_lop: "DI19V1A2",
        Ten_lop_hoc: "Công nghệ thông tin A2"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lop_hocs", null, {});
  },
};
