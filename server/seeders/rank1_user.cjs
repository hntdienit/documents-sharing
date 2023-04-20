"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Nguoi_dungs", [
      {
        Email: "dien1@gmail.com",
        Mat_khau: "$2b$05$Rgqs10pCPTPshfLGynpFyen76po9kyBaJEdsmd9gYwhUmHtxbVJXe",
        Ho_ten: "thanhdien1",
        Quyen: "QuanTri",
      },
      {
        Email: "dien2@gmail.com",
        Mat_khau: "$2b$05$ipxQxSnPlxmq6CqL7QasNee/f7WSYVE3d4PWrgYbkk7pGea9T695.",
        Ho_ten: "thanhdien2",
        Quyen: "GiangVien",
      },
      {
        Email: "dien3@gmail.com",
        Mat_khau: "$2b$05$LBYaUN1OyrOHwRetofR9sOQ9lIWA.yvnKZgH4r36bqnRLqJqPH2va",
        Ho_ten: "thanhdien3",
        Quyen: "SinhVien",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Nguoi_dungs", null, {});
  },
};
