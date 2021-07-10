import React from "react";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

import { useSelector } from "react-redux";

const App = () => {
  const { isAuth } = useSelector(({ users }) => users);

  return (
    <div className="wrapper">
      {isAuth || localStorage.getItem("userToken") ? (
        <UserPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
