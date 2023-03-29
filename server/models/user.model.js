import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Users = sequelize.define(
  "Nguoi_dung",
  {
    Email: { type: DataTypes.STRING, allowNull: true, unique: true },
    Mat_khau: { type: DataTypes.STRING, allowNull: true },
    Ho_ten: { type: DataTypes.STRING, allowNull: true },
    Dia_chi: { type: DataTypes.STRING, allowNull: true },
    CCCD: { type: DataTypes.STRING, allowNull: true },
    Gioi_tinh: { type: DataTypes.STRING, allowNull: true },
    So_dien_thoai: { type: DataTypes.STRING, allowNull: true },
    Ma_so: { type: DataTypes.STRING, allowNull: true, unique: true  },
    // Trang_thai_nguoi_dung: { type: DataTypes.STRING, defaultValue: "ChuaKichHoat" },
    Hinh_dai_dien: { type: DataTypes.STRING, allowNull: true },
    Quyen: { type: DataTypes.STRING, defaultValue: "SinhVien" },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Users;
