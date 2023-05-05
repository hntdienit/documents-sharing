import * as yup from "yup";

const validate = {
  Ho_ten: yup.string().required("Họ tên không để chống không để trống!"),
  Email: yup.string().email("Email không đúng định dạng!").required("Email không để trống!"),
  Mat_khau: yup
    .string()
    .min(6, "Mật khẩu phải nhiều hơn 6 ký tự!")
    .max(15, "Mật khẩu phải ít hơn 15 ký tự!")
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
      "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt!"
    )
    .required("Mật khẩu không được để trống!"),
  Lai_mat_khau: yup.string().oneOf([yup.ref("Mat_khau"), null], "Mật khẩu không khớp!"),
  Ten_tai_lieu: yup
    .string()
    .min(5, "Tên tài liệu phải nhiều hơn 5 ký tự!")
    .max(80, "Tên tài liệu phải ít hơn 80 ký tự!")
    .required("Tên tài liệu không được để trống!"),
  Mo_ta_tai_lieu: yup
    .string()
    .min(5, "Mô tả tài liệu phải nhiều hơn 5 ký tự!")
    .max(150, "Mô tả tài liệu phải ít hơn 150 ký tự!")
    .required("Mô tả tài liệu không được để trống!"),
  Nganh_hoc_id: yup.string().required("Bạn chưa chọn tài liệu thuộc ngành nào!"),
  So_luong: yup
    .number("Số lượng phải là số!")
    .integer("Số lượng phải là kiểu số nguyên!")
    .min(0, "Số lượng phải lớn hơn 0")
    .required("Số lượng không được để trống!"),
  Gia: yup
    .number("Giá phải là số!")
    .integer("Giá phải là kiểu số nguyên!")
    .min(1000, "Giá phải lớn hơn 1000")
    .required("Giá không được để trống"),
};

const validationData = {
  login: yup.object({
    Email: validate.Email,
    // Mat_khau: validate.Mat_khau,
  }),
  register: yup.object({
    Ho_ten: validate.Ho_ten,
    Email: validate.Email,
    Mat_khau: validate.Mat_khau,
    Lai_mat_khau: validate.Lai_mat_khau,
  }),
  shareDocument: yup.object({
    Ten_tai_lieu: validate.Ten_tai_lieu,
    Mo_ta_tai_lieu: validate.Mo_ta_tai_lieu,
    Nganh_hoc_id: validate.Nganh_hoc_id,
    LopHPId: validate.LopHPId,
  }),
  payDocument: yup.object({
    Ten_tai_lieu: validate.Ten_tai_lieu,
    Mo_ta_tai_lieu: validate.Mo_ta_tai_lieu,
    Nganh_hoc_id: validate.Nganh_hoc_id,
    So_luong: validate.So_luong,
    Gia: validate.Gia,
  }),
};

export default validationData;
