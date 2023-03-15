import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    Ho_ten: { type: String },
    Email: { type: String, required: true, unique: true },
    Mat_khau: { type: String },
    authGoogle: { type: String, default: null },
    authType: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Nguoi_dung", UserSchema);
