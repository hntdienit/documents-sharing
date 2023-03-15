import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";

const routes = [
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },

  // { path: "/P403", component: Page403, layout: null },
  // { path: "/admin", component: AdminHome, layout: AdminLayout, role: "admin" },
  { path: "/", component: Home },
];

export default routes;
