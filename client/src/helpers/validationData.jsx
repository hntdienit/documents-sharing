import * as yup from "yup";

const validate = {
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
};

const validationData = {
  login: yup.object({
    Email: validate.Email,
    // Mat_khau: validate.Mat_khau,
  }),
};

export default validationData;
