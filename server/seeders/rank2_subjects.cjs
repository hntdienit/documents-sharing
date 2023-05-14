"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Lop_hoc_phans", [
      {
        Ma_lop_hoc_phan: "TN218",
        Ten_lop_hoc_phan: "Xây dựng ứng dụng thương mại điện tử",
        Hoat_dong: true,
        Giang_vien_id: 2,
      },

      {
        Ma_lop_hoc_phan: "CT477",
        Ten_lop_hoc_phan: "Triển khai dịch vụ mạng và ứng dụng Internet",
        Hoat_dong: true,
        Giang_vien_id: 3,
      },

      {
        Ma_lop_hoc_phan: "KN001",
        Ten_lop_hoc_phan: "Kỹ năng mềm",
        Hoat_dong: true,
        Giang_vien_id: 5,
      },
      {
        Ma_lop_hoc_phan: "TN414",
        Ten_lop_hoc_phan: "Lập trình ứng dụng mạng",
        Hoat_dong: true,
        Giang_vien_id: 7,
      },
      {
        Ma_lop_hoc_phan: "CT177",
        Ten_lop_hoc_phan: "Cấu trúc dữ liệu",
        Hoat_dong: true,
        Giang_vien_id: 5,
      },
      {
        Ma_lop_hoc_phan: "CT173",
        Ten_lop_hoc_phan: "Kiến trúc máy tính",
        Hoat_dong: true,
        Giang_vien_id: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lop_hoc_phans", null, {});
  },
};
