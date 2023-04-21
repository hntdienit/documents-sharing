"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Nganh_hocs", [
      {
        Ma_nganh_hoc: "DI",
        Ten_nganh_hoc: "Công nghệ thông tin",
      },
      {
        Ma_nganh_hoc: "NN",
        Ten_nganh_hoc: "Nông nghiệp",
      },
      {
        Ma_nganh_hoc: "KT",
        Ten_nganh_hoc: "Kinh tế",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Nganh_hocs", null, {});
  },
};
