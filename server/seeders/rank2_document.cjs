"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tai_lieus", [
      {
        Ten_tai_lieu: "Tai lieu 1",
        Mo_ta_tai_lieu: "Mo ta tai lieu 1",
        Url: "http://localhost:3200/files/1680766050696-Drimaes-Internship Program 2023.pdf",
        Cong_khai: true,
        So_luong: 3,
        Gia: 3000,
        Nguoi_dung_id: 1,
      },
      {
        Ten_tai_lieu: "Tai lieu 2",
        Mo_ta_tai_lieu: "Mo ta tai lieu 2",
        Url: "http://localhost:3200/files/1680766050696-Drimaes-Internship Program 2023.pdf",
        Cong_khai: true,
        So_luong: 4,
        Gia: 4000,
        Nguoi_dung_id: 1,
      },
      {
        Ten_tai_lieu: "Tai lieu 3",
        Mo_ta_tai_lieu: "Mo ta tai lieu 3",
        Url: "http://localhost:3200/files/1680766050696-Drimaes-Internship Program 2023.pdf",
        Cong_khai: true,
        So_luong: 6,
        Gia: 2000,
        Nguoi_dung_id: 3,
      },
      {
        Ten_tai_lieu: "Tai lieu 4",
        Mo_ta_tai_lieu: "Mo ta tai lieu 4",
        Url: "http://localhost:3200/files/1680766050696-Drimaes-Internship Program 2023.pdf",
        Cong_khai: true,
        So_luong: 6,
        Gia: 2500,
        Nguoi_dung_id: 2,
      },
      {
        Ten_tai_lieu: "Tai lieu 5",
        Mo_ta_tai_lieu: "Mo ta tai lieu 5",
        Url: "http://localhost:3200/files/1680766050696-Drimaes-Internship Program 2023.pdf",
        Cong_khai: false,
        So_luong: 3,
        Gia: 0,
        Nguoi_dung_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tai_lieus", null, {});
  },
};
