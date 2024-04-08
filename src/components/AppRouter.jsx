import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            {isAuth
                ? privateRoutes.map((router) => {
                      return (
                          <Routes>
                              <Route
                                  element={<router.component />}
                                  path={router.path}
                                  exact={router.exact}
                                  key={router.path}
                              />
                              <Route
                                  element={<Navigate to="/posts" />}
                              />
                          </Routes>
                      );
                  })
                : publicRoutes.map((router) => {
                      return (
                          <Routes>
                              <Route
                                  element={<router.component />}
                                  path={router.path}
                                  exact={router.exact}
                                  key={router.path}
                              />
                              <Route
                                  path="*"
                                  element={<Navigate to="/login" />}
                              />
                          </Routes>
                      );
                  })}
        </div>
    );
};

export default AppRouter;
