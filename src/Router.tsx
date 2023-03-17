import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Login from "./pages/Login";
import Main from "./pages/Main";

const Router: React.FC = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="pageSlider"
      >
        <Routes>
          <Route
            path="/"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          <Route path="/main" element={<Main {...props} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Router;
