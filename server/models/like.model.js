import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Like = sequelize.define(
  "Yeu_thich",
  {
    
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Like;
