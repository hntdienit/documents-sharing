import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./app.scss";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx";
import FragmentLayout from "./layouts/FragmentLayout/FragmentLayout.jsx";
import { AuthContext } from "./helpers/AuthContext.jsx";
import routes from "./routes/index.route.js";

function App() {
  const queryClient = new QueryClient();
  const { currentUser } = useContext(AuthContext);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
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
        </Router>
      </div>
      {/* <ToastContainer autoClose={5000} /> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
