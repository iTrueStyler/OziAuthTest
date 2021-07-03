import React from "react";
import { instance } from "../api";


const UserPage = (props) => {
  const token = props.logObj.data.accessToken;

  const logOut = () => {
    instance
      .post(
        `/api/tager/user/profile/logout`,{},
        
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
      }).catch(props.setLogin(false));
      
  };
  return (
    <div className="form">
      <h2>{props.userInfo.data.id}</h2>
      <h2>{props.userInfo.data.name}</h2>
      <h2>{props.userInfo.data.email}</h2>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default UserPage;
