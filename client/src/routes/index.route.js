// layout
import AdminLayout from "../layouts/AdminLayout/AdminLayout.jsx";
import AdminHome from "../pages/admin/User/ListUser.jsx";

// public
import Page404 from "../pages/public/Page404.jsx";
import Home from "../pages/public/Home.jsx";
import Categories from "../pages/user/Categories.jsx";
import Detail from "../pages/user/Detail.jsx";
import ViewPDF from "../pages/public/ViewPDF.jsx";

// auth
import Register from "../pages/auth/Register.jsx";
import Login from "../pages/auth/Login.jsx";
import VerifyEmail from "../pages/auth/VerifyEmail.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import NewPassword from "../pages/auth/NewPassword.jsx";

// user
import Profile from "../pages/auth/Profile.jsx";
import Wishlist from "../pages/user/Wishlist.jsx";
import Cart from "../pages/user/Cart.jsx";
import Checkout from "../pages/user/Checkout.jsx";
import Message from "../pages/user/Message.jsx";
import Messages from "../pages/user/Messages.jsx";
import Order from "../pages/user/Order.jsx";
import UserOrder from "../pages/user/UserOrder.jsx";

// sinhvien
import ShareDocument from "../pages/user/Document/ShareDocument.jsx";
import PayDocument from "../pages/user/Document/PayDocument.jsx";

// giangvien

// admin
import CreateUser from "../pages/admin/User/CreateUser.jsx";
import ListUser from "../pages/admin/User/ListUser.jsx";
import EditUser from "../pages/admin/User/EditUser.jsx";

import CreateStudent from "../pages/admin/Student/CreateStudent.jsx";
import ListStudent from "../pages/admin/Student/ListStudent.jsx";
import EditStudent from "../pages/admin/Student/EditStudent.jsx";

import CreateLecturers from "../pages/admin/Lecturers/CreateLecturers.jsx";
import ListLecturers from "../pages/admin/Lecturers/ListLecturers.jsx";
import EditLecturers from "../pages/admin/Lecturers/EditLecturers.jsx";

import CreateDocument from "../pages/admin/Document/CreateDocument.jsx";
import ListDocument from "../pages/admin/Document/ListDocument.jsx";
import EditDocument from "../pages/admin/Document/EditDocument.jsx";

import CreateCourse from "../pages/admin/Course/CreateCourse.jsx";
import ListCourse from "../pages/admin/Course/ListCourse.jsx";
import EditCourse from "../pages/admin/Course/EditCourse.jsx";

import CreateSubject from "../pages/admin/Subject/CreateSubject.jsx";
import ListSubject from "../pages/admin/Subject/ListSubject.jsx";
import EditSubject from "../pages/admin/Subject/EditSubject.jsx";

import CreateMajor from "../pages/admin/Major/CreateMajor.jsx";
import ListMajor from "../pages/admin/Major/ListMajor.jsx";
import EditMajor from "../pages/admin/Major/EditMajor.jsx";

import ListReport from "../pages/admin/Report/ListReport.jsx";
import ViewReport from "../pages/admin/Report/ViewReport.jsx";

import Statistic from "../pages/admin/Statistic/Statistic.jsx";
import ViewPDFDocument from "../pages/admin/Document/ViewPDFDocument.jsx";
import ViewDocument from "../pages/admin/Document/ViewDocument.jsx";

const routes = [
  // auth
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/verifyemail", component: VerifyEmail, layout: null },
  { path: "/forgotpassword", component: ForgotPassword, layout: null },
  { path: "/newpassword", component: NewPassword, layout: null },

  { path: "/profile", component: Profile, role: "NguoiDung" },
  { path: "/wishlist", component: Wishlist, role: "NguoiDung" },
  { path: "/cart", component: Cart, role: "SinhVien" },
  { path: "/checkout", component: Checkout, role: "SinhVien" },
  { path: "/messages", component: Messages, role: "SinhVien" },
  { path: "/message/:id", component: Message, role: "SinhVien" },
  { path: "/order", component: Order, role: "SinhVien" },
  { path: "/userorder", component: UserOrder, role: "SinhVien" },

  // admin
  { path: "/admin", component: AdminHome, layout: AdminLayout, role: "QuanTri" },
  { path: "/admin/document/create", component: CreateDocument, layout: AdminLayout },
  { path: "/admin/document/list", component: ListDocument, layout: AdminLayout },
  { path: "/admin/document/edit/:id", component: EditDocument, layout: AdminLayout },
  { path: "/admin/document/viewpdf/:id", component: ViewPDFDocument, layout: AdminLayout },
  { path: "/admin/document/view/:id", component: ViewDocument, layout: AdminLayout },

  { path: "/admin/user/create", component: CreateUser, layout: AdminLayout },
  { path: "/admin/user/list", component: ListUser, layout: AdminLayout },
  { path: "/admin/user/edit/:id", component: EditUser, layout: AdminLayout },

  { path: "/admin/student/create", component: CreateStudent, layout: AdminLayout },
  { path: "/admin/student/list", component: ListStudent, layout: AdminLayout },
  { path: "/admin/student/edit/:id", component: EditStudent, layout: AdminLayout },

  { path: "/admin/lecturers/create", component: CreateLecturers, layout: AdminLayout },
  { path: "/admin/lecturers/list", component: ListLecturers, layout: AdminLayout },
  { path: "/admin/lecturers/edit/:id", component: EditLecturers, layout: AdminLayout },

  { path: "/admin/course/create", component: CreateCourse, layout: AdminLayout },
  { path: "/admin/course/list", component: ListCourse, layout: AdminLayout },
  { path: "/admin/course/edit/:id", component: EditCourse, layout: AdminLayout },

  { path: "/admin/subject/create", component: CreateSubject, layout: AdminLayout },
  { path: "/admin/subject/list", component: ListSubject, layout: AdminLayout },
  { path: "/admin/subject/edit/:id", component: EditSubject, layout: AdminLayout },

  { path: "/admin/major/create", component: CreateMajor, layout: AdminLayout },
  { path: "/admin/major/list", component: ListMajor, layout: AdminLayout },
  { path: "/admin/major/edit/:id", component: EditMajor, layout: AdminLayout },

  { path: "/admin/report/list", component: ListReport, layout: AdminLayout },
  { path: "/admin/report/view/:id", component: ViewReport, layout: AdminLayout },

  { path: "/admin/statistic", component: Statistic, layout: AdminLayout },

  // sinhvien
  { path: "/document/share", component: ShareDocument, role: "SinhVien" },
  { path: "/document/pay", component: PayDocument, role: "SinhVien" },

  // giangvien

  // public
  { path: "/document/all", component: Categories },
  { path: "/document/viewpdf/:id", component: ViewPDF },
  { path: "/document/:id", component: Detail },
  { path: "/", component: Home },
  { path: "/*", component: Page404, layout: null },
];

export default routes;
