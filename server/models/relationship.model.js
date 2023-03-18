import Chapters from "./chapter.model.js";
import Comments from "./comment.model.js";
import Courses from "./course.model.js";
import Documents from "./document.model.js";
import Faculties from "./faculty.model.js";
import Images from "./image.model.js";
import Lessons from "./lesson.model.js";
import Messages from "./message.model.js";
import Ratings from "./rating.model.js";
import Subjects from "./subject.model.js";
import Users from "./user.model.js";

const relationship = () => {
  //   /* Users x Addresses: Many to Many */
  //   Users.belongsToMany(Addresses, { through: "UserAddresses", foreignKey: "userId" });
  //   Addresses.belongsToMany(Users, { through: "UserAddresses", foreignKey: "addressId" });
  //   /* Users x Promotions: one to Many */
  //   Users.hasMany(Promotions, { foreignKey: "employeeId" });
  //   Promotions.belongsTo(Users, { foreignKey: "employeeId" });

  /* Users x Documents: one to Many */
  Users.hasMany(Documents, { foreignKey: "Nguoi_dung_id" });
  Documents.belongsTo(Users, { foreignKey: "Nguoi_dung_id" });
};

export default relationship;
