import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Conversation = sequelize.define(
  "Cuoc_doi_thoai",
  {
    Tin_nhan_cuoi: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Conversation;
