import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";

const Router: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <Main /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
