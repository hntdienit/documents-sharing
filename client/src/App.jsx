import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./app.scss";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx";
import FragmentLayout from "./layouts/FragmentLayout/FragmentLayout.jsx";
import routes from "./routes/index.route.js";
import getCurrentUser from "./utils/getCurrentUser.js";

function App() {
  const queryClient = new QueryClient();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <AuthContext.Provider value={{ auth, setAuth }}>
      <CartContext.Provider value={{ CartDetails, setCartDetails }}> */}
        <Router>
          <div className="App">
            <Routes>
              {routes.map((item, index) => {
                let Layout = DefaultLayout;
                if (item.layout) Layout = item.layout;
                if (item.layout === null) Layout = FragmentLayout;
                let Page = item.component;
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={
                      // item.role ? (
                      //   <ProtectedRoute role={item.role}>
                      //     <Layout>
                      //       <Page></Page>
                      //     </Layout>
                      //   </ProtectedRoute>
                      // ) : (
                      <Layout currentUser={currentUser}>
                        <Page currentUser={currentUser}></Page>
                      </Layout>
                      // )
                    }
                  ></Route>
                );
              })}
            </Routes>
          </div>
        </Router>
        {/* </CartContext.Provider> */}

        {/* </AuthContext.Provider> */}
        {/* <ToastContainer autoClose={5000} /> */}
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
