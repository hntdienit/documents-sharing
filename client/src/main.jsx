import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from "./helpers/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
