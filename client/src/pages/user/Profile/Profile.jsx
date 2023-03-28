import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MessageIcon from "@mui/icons-material/Message";

import "./Profile.scss";
import images from "../../../assets/images";
import HeaderPage from "../../../components/user/HeaderPage/HeaderPage.jsx";
import Star from "../../../components/public/Star/Star.jsx";
import CardCustom from "../../../components/public/Card/Card.jsx";

const Profile = () => {
  return (
    <>
      <HeaderPage page={"Hồ sơ"} linkpage={"Hồ sơ"} />
      <div className="profile">
        <div className="profile__container">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="box">
                <div className="box__body">
                  <div className="profile__user">
                    <img src={images.courses1} alt="user" />
                    <h4>johen doe</h4>
                    <p>dummy@gmail.com</p>
                  </div>

                  <div className="profile__star">
                    <Star stars={4.5} />
                  </div>
                </div>
                <div className="profile__message">
                  <Link to={"/"} className="link">
                    <span>
                      <MessageIcon />
                    </span>
                    Message
                  </Link>
                </div>
              </div>
              <div className="profile__follow">
                <div className="box">
                  <div className="box__body">
                    <div className="profile__title">Đã theo dõi</div>
                    <div className="profile__fuser">
                      <img src={images.courses2} alt="user_img" />
                      <div className="profile__fuser__info">
                        <Link to={"/"}>Sophia</Link>
                        <span>sophia@dummy.com</span>
                      </div>
                    </div>
                    <div className="profile__fuser">
                      <img src={images.courses2} alt="user_img" />
                      <div className="profile__fuser__info">
                        <Link to={"/"}>Sophia</Link>
                        <span>sophia@dummy.comsdsfd</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
              <div className="box">
                <div className="box__body">
                  <div className="profile__title">
                    <h4 className="box__title">Tài liệu của tôi</h4>
                  </div>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                      <CardCustom />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                      <CardCustom />
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className="box">
                <div className="box__body">
                  <div className="profile__title">
                    <h4 className="box__title">Danh sách yêu thích</h4>
                  </div>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                      <CardCustom />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                      <CardCustom />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Profile;
