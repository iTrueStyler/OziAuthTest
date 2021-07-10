import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userReducer";

const UserPage = () => {
  const dispatch = useDispatch();
  const logoutFunc = () => {
    dispatch(logout());
    localStorage.removeItem("userToken");
  };
  const { email, id, name } = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="userform">
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
              .
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Name:{name} </h3>
          <div>E-mail:{email} </div>
          <div>User ID:{id}</div>
        </div>

        <button onClick={logoutFunc}>Logout</button>
      </div>
    </div>
  );
};

export default UserPage;
