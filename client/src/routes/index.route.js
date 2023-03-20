import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";

import Page404 from "../pages/Page404/Page404.jsx";
import Category from "../pages/Category/Category.jsx";

const routes = [
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },

  { path: "/category", component: Category },

  // { path: "/P403", component: Page403, layout: null },
  // { path: "/admin", component: AdminHome, layout: AdminLayout, role: "admin" },
  { path: "/", component: Home },
  { path: "/*", component: Page404 },
];

export default routes;
