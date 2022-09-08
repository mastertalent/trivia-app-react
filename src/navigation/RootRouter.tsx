import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute, defaultProtectedRouteProps } from "./ProtectedRoute";

import { useSelector } from "react-redux";
import { _isAuthenticated } from "../features/common/myStore";
import { routes } from "../features/common/routes";

const RootRouter = () => {
  const _isAuth: boolean = useSelector(_isAuthenticated);
  const _protectedRouteProps = {
    ...defaultProtectedRouteProps,
    isAuthenticated: _isAuth,
  };

  return (
    <Router>
      <Routes>
        {routes.map((route, i) => {
          return route.protected ? (
            <Route
              key={i}
              path={`/${route.path}`}
              element={
                <ProtectedRoute
                  {..._protectedRouteProps}
                  outlet={<route.element />}
                />
              }
            />
          ) : (
            <Route
              key={i}
              path={`/${route.path}`}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RootRouter;
