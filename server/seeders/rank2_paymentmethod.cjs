"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Phuong_thuc_thanh_toans", [
      {
        Ma_phuong_thuc_thanh_toan: "vnpay",
        Ten_phuong_thuc_thanh_toan: "VNPAY",
        Nguoi_dung_id: 9,
      },
      {
        Ma_phuong_thuc_thanh_toan: "tt",
        Ten_phuong_thuc_thanh_toan: "Thanh toán trực tiếp",
        Nguoi_dung_id: 9,
      },
      {
        Ma_phuong_thuc_thanh_toan: "vnpay",
        Ten_phuong_thuc_thanh_toan: "VNPAY",
        Nguoi_dung_id: 10,
      },
      {
        Ma_phuong_thuc_thanh_toan: "tt",
        Ten_phuong_thuc_thanh_toan: "Thanh toán trực tiếp",
        Nguoi_dung_id: 10,
      },
      {
        Ma_phuong_thuc_thanh_toan: "vnpay",
        Ten_phuong_thuc_thanh_toan: "VNPAY",
        Nguoi_dung_id: 11,
      },
      {
        Ma_phuong_thuc_thanh_toan: "tt",
        Ten_phuong_thuc_thanh_toan: "Thanh toán trực tiếp",
        Nguoi_dung_id: 11,
      },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Phuong_thuc_thanh_toans", null, {});
  },
};
