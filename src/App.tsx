import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import SignIn from "./pages/signin";

import SignUp from "./pages/signup";

function App() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (
      !user &&
      window.location.pathname !== "/signin" &&
      window.location.pathname !== "/signup"
    ) {
      navigate("/signin");
    }
  }, [user]);

  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
