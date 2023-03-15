import joi from "joi";
import createError from "../utils/createError.js";

const vBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return next(createError(400, "Thông tin nhập chưa chính xác!"));
    } else {
      if (!req.value) req.value = {};
      req.value.body = value;
      next();
    }
  };
};

const vParam = (schema, name) => {
  return (req, res, next) => {
    const { error, value } = schema.validate({ param: req.params[name] }, { abortEarly: false });
    if (error) {
      return next(createError(400, "Thông tin chưa chính xác!"));
    } else {
      if (!req.value) req.value = {};
      if (!req.value["params"]) req.value.params = {};
      req.value.params[name] = req.params[name];
      next();
    }
  };
};

const schemas = {
  login: joi.object({
    Email: joi.string().required().email(),
    Mat_khau: joi.string().min(4),
  }),
};

export default { vBody, vParam, schemas };
