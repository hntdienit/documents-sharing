"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Lop_hoc_phans", [
      {
        Ma_lop_hoc_phan: "KN001",
        Ten_lop_hoc_phan: "Kỹ năng mềm"
      },
      {
        Ma_lop_hoc_phan: "CT177",
        Ten_lop_hoc_phan: "Cấu trúc dữ liệu"
      },
      {
        Ma_lop_hoc_phan: "CT173",
        Ten_lop_hoc_phan: "Kiến trúc máy tính"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lop_hoc_phans", null, {});
  },
};
