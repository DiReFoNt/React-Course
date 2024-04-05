import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((router) => {
                return (
                    <Route
                        element={<router.component/>}
                        path={router.path}
                        exact={router.exact}
                    />
                );
            })}

            <Route path="*" element={<Navigate to="/posts" />} />
        </Routes>
    );
};

export default AppRouter;
