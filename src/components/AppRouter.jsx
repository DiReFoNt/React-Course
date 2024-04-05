import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";

const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((router) => {
                      return (
                          <Route
                              element={<router.component />}
                              path={router.path}
                              exact={router.exact}
                          />
                      );
                  })
                : publicRoutes.map((router) => {
                      return (
                          <Route
                              element={<router.component />}
                              path={router.path}
                              exact={router.exact}
                          />
                      );
                  })}

            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default AppRouter;
