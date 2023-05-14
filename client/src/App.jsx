import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newRequest from "./utils/newRequest";
import { AuthContext } from "./helpers/AuthContext";


import "./app.scss";
// import "./assets/scss/style.scss"
// import "./reponsive.scss"
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx";
import FragmentLayout from "./layouts/FragmentLayout/FragmentLayout.jsx";
import routes from "./routes/index.route.js";
import ProtectedRoute from "./routes/protected.route.jsx";

function App() {
  const queryClient = new QueryClient();
  const { setCurrentUser } = useContext(AuthContext);

  const [openMess, setOpenMess] = useState(false);
  const [id, setId] = useState(0);
  const [uid, setUId] = useState(0);

  const getUser = async () => {
    await newRequest.get("/auth/login/success").then((res) => {
      if (res.data.error) {
        // toast.error(res.data.error, {});
      } else {
        setCurrentUser(res.data);
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

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
                    item.role ? (
                      <ProtectedRoute role={item.role}>
                        <Layout
                          openMess={openMess}
                          setOpenMess={setOpenMess}
                          id={id}
                          setId={setId}
                          uid={uid}
                          setUId={setUId}
                        >
                          <Page
                            openMess={openMess}
                            setOpenMess={setOpenMess}
                            id={id}
                            setId={setId}
                            uid={uid}
                            setUId={setUId}
                          ></Page>
                        </Layout>
                      </ProtectedRoute>
                    ) : (
                      <Layout
                        openMess={openMess}
                        setOpenMess={setOpenMess}
                        id={id}
                        setId={setId}
                        uid={uid}
                        setUId={setUId}
                      >
                        <Page
                          openMess={openMess}
                          setOpenMess={setOpenMess}
                          id={id}
                          setId={setId}
                          uid={uid}
                          setUId={setUId}
                        ></Page>
                      </Layout>
                    )
                  }
                ></Route>
              );
            })}
          </Routes>
        </Router>
      </div>
      <ToastContainer autoClose={5000} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
