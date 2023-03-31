import BuyHistorys from "./buyhistory.model.js";
import CartDetails from "./cartdetail.model.js";
import Conversations from "./conversation.model.js";
import Courses from "./course.model.js";
import Documents from "./document.model.js";
import Images from "./image.model.js";
import Likes from "./like.model.js";
import Messages from "./message.model.js";
import Orders from "./order.model.js";
import OrderDetails from "./orderdetail.model.js";
import PaymentMethods from "./paymentmethod.model.js";
import Promotions from "./promotion.model.js";
import Reports from "./report.model.js";
import Reviews from "./review.model.js";
import Subjects from "./subject.model.js";
import Users from "./user.model.js";

const relationship = () => {
  //   /* Users x Addresses: Many to Many */
  //   Users.belongsToMany(Addresses, { through: "UserAddresses", foreignKey: "userId" });
  //   Addresses.belongsToMany(Users, { through: "UserAddresses", foreignKey: "addressId" });
  //   /* Users x Promotions: one to Many */
  //   Users.hasMany(Promotions, { foreignKey: "employeeId" });
  //   Promotions.belongsTo(Users, { foreignKey: "employeeId" });

  /* Users x BuyHistorys: one to Many */
  Users.hasMany(BuyHistorys, { foreignKey: "Nguoi_dung_id" });
  BuyHistorys.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Documents x BuyHistorys: one to Many */
  Documents.hasMany(BuyHistorys, { foreignKey: "Tai_lieu_id" });
  BuyHistorys.belongsTo(Documents, { foreignKey: "Tai_lieu_id" });

  /* Users x CartDetails: one to Many */
  Users.hasMany(CartDetails, { foreignKey: "Nguoi_dung_id" });
  CartDetails.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Documents x CartDetails: one to Many */
  Documents.hasMany(CartDetails, { foreignKey: "Tai_lieu_id" });
  CartDetails.belongsTo(Documents, { foreignKey: "Tai_lieu_id" });

  /* Courses x Users: one to Many */
  Courses.hasMany(Users, { foreignKey: "Lop_id" });
  Users.belongsTo(Courses, { foreignKey: "Lop_id" });

  /* Subjects x Documents: one to Many */
  Subjects.hasMany(Documents, { foreignKey: "Lop_hoc_phan_id" });
  Documents.belongsTo(Subjects, { foreignKey: "Lop_hoc_phan_id" });

  /* Users x Documents: one to Many */
  Users.hasMany(Documents, { foreignKey: "Nguoi_dung_id" });
  Documents.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Documents x Reviews: one to Many */
  Documents.hasMany(Reviews, { foreignKey: "Tai_lieu_id" });
  Reviews.belongsTo(Documents, { foreignKey: "Tai_lieu_id" });

  /* Documents x Images: one to Many */
  Documents.hasMany(Images, { foreignKey: "Tai_lieu_id" });
  Images.belongsTo(Documents, { foreignKey: "Tai_lieu_id" });

  /* Documents x CartDetails: one to Many */
  Documents.hasMany(CartDetails, { foreignKey: "Tai_lieu_id" });
  CartDetails.belongsTo(Documents, { foreignKey: "Tai_lieu_id" });

  /* Documents x Promotions: one to Many */
  Documents.hasMany(Promotions, { foreignKey: "Tai_lieu_id" });
  Promotions.belongsTo(Documents, { foreignKey: "Tai_lieu_id" });

  /* Documents x Likes: one to Many */
  Documents.hasMany(Likes, { foreignKey: "Tai_lieu_id" });
  Likes.belongsTo(Documents, { foreignKey: "Tai_lieu_id" });

  /* Users x Likes: one to Many */
  Users.hasMany(Likes, { foreignKey: "Nguoi_dung_id" });
  Likes.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Orders x OrderDetails: one to Many */
  Orders.hasMany(OrderDetails, { foreignKey: "Don_hang_id" });
  OrderDetails.belongsTo(Orders, { foreignKey: "Don_hang_id" });

  /* Users x Orders: one to Many */
  Users.hasMany(Orders, { foreignKey: "Nguoi_dung_id" });
  Orders.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Users x Orders: one to Many */
  Users.hasMany(Orders, { foreignKey: "Nguoi_dung_id" });
  Orders.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* PaymentMethods x Orders: one to Many */
  PaymentMethods.hasMany(Orders, { foreignKey: "Phuong_thuc_thanh_toan_id" });
  Orders.belongsTo(PaymentMethods, { foreignKey: "Phuong_thuc_thanh_toan_id" });

  /* Users x PaymentMethods: one to Many */
  Users.hasMany(PaymentMethods, { foreignKey: "Nguoi_dung_id" });
  PaymentMethods.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Users x PaymentMethods: one to Many */
  Users.hasMany(PaymentMethods, { foreignKey: "Nguoi_dung_id" });
  PaymentMethods.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Users x Promotions: one to Many */
  Users.hasMany(Promotions, { foreignKey: "Nguoi_dung_id" });
  Promotions.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Users x Reports: one to Many */
  Users.hasMany(Reports, { foreignKey: "Nguoi_dung_id" });
  Reports.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Reports x Images: one to Many */
  Reports.hasMany(Images, { foreignKey: "Bao_cao_id" });
  Images.belongsTo(Reports, { foreignKey: "Bao_cao_id" });

  /* Users x Reviews: one to Many */
  Users.hasMany(Reviews, { foreignKey: "Nguoi_dung_id" });
  Reviews.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });

  /* Users x Subjects: Many to Many */
  Users.belongsToMany(Subjects, { through: "Danh_sach_lop_hoc_phans", foreignKey: "Nguoi_dung_id" });
  Subjects.belongsToMany(Users, { through: "Danh_sach_lop_hoc_phans", foreignKey: "Lop_hoc_phan_id" });
};

export default relationship;
