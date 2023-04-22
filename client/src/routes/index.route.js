// layout
import AdminLayout from "../layouts/AdminLayout/AdminLayout.jsx";
import AdminHome from "../pages/admin/Home/Home.jsx";

// public
import Page404 from "../pages/public/Page404/Page404.jsx";
import Home from "../pages/Home/Home.jsx";
import Categories from "../pages/user/Categories.jsx";
import Detail from "../pages/user/Detail.jsx";

// auth
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import Profile from "../pages/auth/Profile/Profile.jsx";
import Wishlist from "../pages/user/Wishlist/Wishlist.jsx";
import Cart from "../pages/user/Cart.jsx";
import Checkout from "../pages/user/Checkout.jsx";

// admin
import NewUser from "../pages/admin/User/NewUser.jsx";
import CreateDocument from "../pages/user/Document/CreateDocument.jsx";
import ListDocument from "../pages/user/Document/ListDocument.jsx";
import EditDocument from "../pages/user/Document/EditDocument.jsx";

// sinhvien
import ShareDocument from "../pages/user/Document/ShareDocument.jsx";
import PayDocument from "../pages/user/Document/PayDocument.jsx";

// giangvien

const routes = [
  // auth
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/profile", component: Profile, role: "NguoiDung" },
  { path: "/wishlist", component: Wishlist, role: "NguoiDung" },
  { path: "/cart", component: Cart, role: "SinhVien" },
  { path: "/checkout", component: Checkout, role: "SinhVien" },

  // admin
  { path: "/admin", component: AdminHome, layout: AdminLayout, role: "QuanTri" },
  { path: "/admin/user/NewUser", component: NewUser, layout: AdminLayout },
  { path: "/admin/document/create", component: CreateDocument, layout: AdminLayout },
  { path: "/admin/document/list", component: ListDocument, layout: AdminLayout },
  { path: "/admin/document/edit/:id", component: EditDocument, layout: AdminLayout },

  // sinhvien
  { path: "/document/share", component: ShareDocument, role: "SinhVien" },
  { path: "/document/pay", component: PayDocument, role: "SinhVien" },

  // giangvien

  // public
  { path: "/document/all", component: Categories },
  { path: "/document/:id", component: Detail },
  { path: "/", component: Home },
  { path: "/*", component: Page404, layout: null },
];

export default routes;
