import React, { useContext } from "react";
import images from "../../../assets/images";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

const UserAvatar = () => {
  const { currentUser } = useContext(AuthContext);
  return <img src={currentUser?.Hinh_dai_dien ? currentUser?.Hinh_dai_dien : images.noavatar} alt="user" className="chatavatar"/>;
};

export default UserAvatar;
