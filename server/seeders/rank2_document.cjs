"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tai_lieus", [
      {
        Ten_tai_lieu: "Xác xuất thông kê",
        Mo_ta_tai_lieu: "Mô tả xác xuất thông kê",
        Url: "http://localhost:3200/files/1682250027811-Giao trinh PHP_CT480_Chuong 1.pdf",
        Cong_khai: true,
        So_luong: 1,
        Gia: 0,
        Nguoi_dung_id: 2,
        Nganh_hoc_id: 4,
        Kiem_duyet: 1,
      },
      {
        Ten_tai_lieu: "Toán cao cấp",
        Mo_ta_tai_lieu: "Mô tả toán cao cấp",
        Url: "http://localhost:3200/files/1682250027811-Giao trinh PHP_CT480_Chuong 1.pdf",
        Cong_khai: true,
        So_luong: 1,
        Gia: 0,
        Nguoi_dung_id: 2,
        Nganh_hoc_id: 4,
        Kiem_duyet: 1,
      },
      {
        Ten_tai_lieu: "Cấu trúc dữ liệu",
        Mo_ta_tai_lieu: "Mô tả cấu trúc dữ liệu",
        Url: "http://localhost:3200/files/1682250027811-Giao trinh PHP_CT480_Chuong 1.pdf",
        Cong_khai: true,
        So_luong: 1,
        Gia: 0,
        Nguoi_dung_id: 3,
        Nganh_hoc_id: 1,
        Kiem_duyet: 1,
      },
      {
        Ten_tai_lieu: "Lập trình hướng đối tượng",
        Mo_ta_tai_lieu: "Mô tả lập trình hướng đối tượng",
        Url: "http://localhost:3200/files/1682250027811-Giao trinh PHP_CT480_Chuong 1.pdf",
        Cong_khai: true,
        So_luong: 1,
        Gia: 0,
        Nguoi_dung_id: 2,
        Nganh_hoc_id: 1,
        Kiem_duyet: 1,
      },
      {
        Ten_tai_lieu: "Vi tích phân A1",
        Mo_ta_tai_lieu: "Mô tả vi tích phân A1",
        Url: "http://localhost:3200/files/1682250027811-Giao trinh PHP_CT480_Chuong 1.pdf",
        Cong_khai: true,
        So_luong: 1,
        Gia: 0,
        Nguoi_dung_id: 2,
        Nganh_hoc_id: 4,
        Kiem_duyet: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tai_lieus", null, {});
  },
};
