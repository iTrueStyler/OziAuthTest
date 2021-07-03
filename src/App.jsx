import React, { useState } from "react";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import { instance } from "./api";

const App = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [logObj, setlogObj] = useState(null);

  const authUser = (obj) => {
    instance
      .post(`/api/auth/user`, {
        clientId: 1,
        email: obj.email,
        password: obj.password,
      })
      .then(({ data }) => {
        const token = data.data.accessToken;

        instance
          .get(`/api/tager/user/profile`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(({ data }) => {

            setUser(data);
            setLogin(true);
          });
        return data;
      })
      .then((data) => {
        setlogObj(data);
      })
      .catch((error) => {
        let alert = document.createElement("div");
        alert.className = "alert-rus";
        alert.innerText = "Email or password is incorrect";
        document.body.append(alert);
        setTimeout(() => {
          document.body.removeChild(alert);
        }, 3000);
      });
  };

  return (
    <div className="wrapper">
      {login ? (
        <UserPage userInfo={user} logObj={logObj} setLogin={setLogin} />
      ) : (
        <HomePage authUser={authUser} />
      )}
    </div>
  );
};

export default App;
