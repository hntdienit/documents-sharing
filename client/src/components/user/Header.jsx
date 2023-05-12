import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ListAltIcon from "@mui/icons-material/ListAlt";

import newRequest from "../../utils/newRequest.js";
import images from "../../assets/images";
import { AuthContext } from "../../helpers/AuthContext.jsx";

const Header = () => {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await newRequest.post("/auth/logout").then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        setCurrentUser(null);
        toast.info("Bạn đã đăng xuất thành công!", {});
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="rbt-header rbt-header-3">
        <div className="rbt-header-top rbt-header-top-1 header-space-betwween bg-color-darker rbt-border-bottom top-expended-activation">
          <div className="container-fluid">
            <div className="top-expended-wrapper">
              <div className="top-expended-inner rbt-header-sec align-items-center ">
                <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                  <div className="rbt-header-content">
                    <div className="header-info">
                      <ul className="rbt-information-list">
                        <li>
                          <Link to={"/"}>
                            <span className="me-2">
                              <SchoolIcon />
                            </span>
                            B1910055
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <span className="me-2">
                              <BookIcon />
                            </span>
                            Luận văn
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                  <div className="rbt-header-content justify-content-start justify-content-lg-end">
                    <div className="header-info">
                      <ul className="rbt-dropdown-menu switcher-language">
                        <li className="has-child-menu">
                          <Link to={"/"}>
                            <img className="left-image" src={images.en_us} alt="Language Images" />
                            <span className="menu-item">Tiếng Anh</span>
                            <KeyboardArrowDownIcon />
                          </Link>
                          <ul className="sub-menu lang_h">
                            <li>
                              <Link to={"/"}>
                                <img className="left-image" src={images.fr} alt="Language Images" />
                                <span className="menu-item">Français</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <img className="left-image" src={images.de} alt="Language Images" />
                                <span className="menu-item">Deutsch</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="header-info">
                      <ul className="rbt-dropdown-menu currency-menu">
                        <li className="has-child-menu">
                          <Link to={"/"}>
                            <span className="menu-item">USD</span>
                            <KeyboardArrowDownIcon />
                          </Link>
                          <ul className="sub-menu hover-reverse">
                            <li>
                              <Link to={"/"}>
                                <span className="menu-item">EUR</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={"/"}>
                                <span className="menu-item">GBP</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-info">
                <div className="top-bar-expended d-block d-lg-none">
                  <button className="topbar-expend-button rbt-round-btn">
                    <i className="feather-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-header-middle position-relative rbt-header-mid-1 header-space-betwween bg-color-white rbt-border-bottom d-none d-xl-block">
          <div className="container-fluid">
            <div className="rbt-header-sec align-items-center ">
              <div className="rbt-header-sec-col rbt-header-left">
                <div className="rbt-header-content">
                  <div className="header-info">
                    <div className="logo">
                      <Link to={"/"}>
                        <img src={images.logo} alt="Education Logo Images" className="img-logo" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rbt-header-sec-col rbt-header-center d-none d-md-block">
                <div className="rbt-header-content">
                  <div className="header-info">
                    <div className="rbt-search-field">
                      <div className="search-field">
                        <input type="text" placeholder="Tìm tài liệu..." />
                        <button className="rbt-round-btn serach-btn" type="submit">
                          <SearchIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rbt-header-sec-col rbt-header-right">
                <div className="rbt-header-content">
                  <div className="header-info">
                    <ul className="quick-access">
                      <li className="access-icon rbt-mini-cart">
                        <Link to={"/cart"} className="rbt-cart-sidenav-activation rbt-round-btn">
                          <i>
                            <ShoppingCartIcon />
                          </i>
                          {/* <span className="rbt-cart-count">4</span> */}
                        </Link>
                      </li>

                      <li className="access-icon rbt-user-wrapper icon__user">
                        <a className="rbt-round-btn" href="#">
                          <i>
                            <PermIdentityIcon />
                          </i>
                        </a>
                        <div className="rbt-user-menu-list-wrapper">
                          <div className="inner">
                            {currentUser && (
                              <>
                                <div className="rbt-admin-profile">
                                  <div className="admin-thumbnail">
                                    <img src={currentUser?.Hinh_dai_dien || images.noavatar} alt="User Images" />
                                  </div>
                                  <div className="admin-info">
                                    <span className="name">{currentUser?.Ho_ten}</span>
                                  </div>
                                </div>
                                <ul className="user-list-wrapper">
                                  <li>
                                    <Link to={"/profile"}>
                                      <span className="me-2">
                                        <AccountCircleIcon />
                                      </span>
                                      <span>Trang cá nhân</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={"/wishlist"}>
                                      <span className="me-2">
                                        <FavoriteIcon />
                                      </span>
                                      <span>Danh sách yêu thích</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={"/order"}>
                                      <span className="me-2">
                                        <ListAltIcon />
                                      </span>
                                      <span>Đơn hàng</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={"/userorder"}>
                                      <span className="me-2">
                                        <ListAltIcon />
                                      </span>
                                      <span>Đơn đặt hàng</span>
                                    </Link>
                                  </li>
                                </ul>
                                <hr className="mt--10 mb--10" />
                              </>
                            )}

                            <ul className="user-list-wrapper">
                              {currentUser ? (
                                <li>
                                  <Link onClick={handleLogout}>
                                    <i className="feather-log-out"></i>
                                    <span>Đăng xuất</span>
                                  </Link>
                                </li>
                              ) : (
                                <>
                                  <li>
                                    <Link to={"/login"}>
                                      <i className="feather-log-out"></i>
                                      <span>Đăng nhập</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={"/register"}>
                                      <i className="feather-log-out"></i>
                                      <span>Đăng ký</span>
                                    </Link>
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="access-icon rbt-mini-cart">
                        <Link to={"/wishlist"} className="rbt-cart-sidenav-activation rbt-round-btn">
                          <i>
                            <FavoriteIcon />
                          </i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-header-wrapper height-50 header-space-betwween bg-color-white header-sticky">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to={"/"}>Trang chủ </Link>
                    </li>

                    {currentUser?.Vai_tro !== "NguoiDung" && (
                      <>
                        <li className="has-dropdown has-menu-child-item">
                          <Link to={"/document/share"}>Chia sẻ tài liệu</Link>
                        </li>
                        <li className="has-dropdown has-menu-child-item">
                          <Link to={"/document/pay"}>Bán tài liệu</Link>
                        </li>
                      </>
                    )}
                    <li className="has-dropdown has-menu-child-item">
                      <Link to={"/document/all"}>Danh sách tài liệu</Link>
                    </li>
                    {/* <li className="has-dropdown has-menu-child-item">
                      <Link to={"/messages"}>tin nhan</Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
