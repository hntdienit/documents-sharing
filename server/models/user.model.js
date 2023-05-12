import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Users = sequelize.define(
  "Nguoi_dung",
  {
    Ma_so: { type: DataTypes.STRING, allowNull: true, unique: true },
    Email: { type: DataTypes.STRING, allowNull: true, unique: true },
    Mat_khau: { type: DataTypes.STRING, allowNull: true },
    Ho_ten: { type: DataTypes.STRING, allowNull: true },
    Dia_chi: { type: DataTypes.STRING, allowNull: true },
    CCCD: { type: DataTypes.STRING, allowNull: true },
    Gioi_tinh: { type: DataTypes.STRING, allowNull: true },
    So_dien_thoai: { type: DataTypes.STRING, allowNull: true },
    Hinh_dai_dien: { type: DataTypes.STRING, allowNull: true },
    Vai_tro: { type: DataTypes.STRING, defaultValue: "NguoiDung" },
    Quyen_su_dung: { type: DataTypes.STRING, defaultValue: 0 },
    Ma_google: { type: DataTypes.STRING, allowNull: true },
    Email_da_xac_thuc: { type: DataTypes.STRING, defaultValue: 0 },
    Ma_xac_thuc_email: { type: DataTypes.STRING, defaultValue: 0 },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Users;
