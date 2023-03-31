import sequelize from "../config/db.js";

const ListSubjects = sequelize.define(
  "Danh_sach_lop_hoc_phan",
  {},
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default ListSubjects;
