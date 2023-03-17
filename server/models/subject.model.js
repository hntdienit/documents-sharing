import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Users = sequelize.define(
  "Nguoi_dung",
  {
    Email: { type: DataTypes.STRING, allowNull: true, unique: true },
    Mat_khau: { type: DataTypes.STRING, allowNull: true },
    Ho_ten: { type: DataTypes.STRING, allowNull: true },
    // email: { type: DataTypes.STRING, allowNull: false, unique: true },
    // role: { type: DataTypes.STRING, defaultValue: "user" },
    // googleid: { type: DataTypes.STRING, allowNull: true },
    // facebookid: { type: DataTypes.STRING, allowNull: true },
    // image: { type: DataTypes.STRING, allowNull: true },
    // emailverified: { type: DataTypes.STRING, defaultValue: "0" },
    // fullname: { type: DataTypes.STRING, allowNull: true },
    // dayofbirth: { type: DataTypes.DATE, allowNull: true },
    // gender: { type: DataTypes.STRING, allowNull: true },
    // phone: { type: DataTypes.STRING, allowNull: true },
    // cccd: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Users;
