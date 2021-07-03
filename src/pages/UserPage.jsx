import React from "react";
import { instance } from "../api";


const UserPage = ({ userInfo, logObj, setLogin }) => {
  const token = logObj.data.accessToken;

  const logOut = () => {
    instance
      .post(
        `/api/tager/user/profile/logout`, {},

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
      }).catch(setLogin(false));

  };
  return (

    <div className="userform">
      <div class="a-box">
        <div class="img-container">
          <div class="img-inner">
            <div class="inner-skew">
              <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>.
            </div>
          </div>
        </div>
        <div class="text-container">
          <h3>Name: {userInfo.data.name}</h3>
          <div>
            E-mail: {userInfo.data.email}
          </div>
          <div>
            User ID:{userInfo.data.id}
          </div>
        </div>

        <button onClick={logOut}>Logout</button>
      </div>
    </div>

  );
};

export default UserPage;
