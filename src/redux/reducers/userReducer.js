import { instance } from "../../api";

let initialState = {
  id: null,
  email: null,
  name: null,
  isAuth: false,
};

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGOUT = "SET_LOGOUT";

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload.data,
        isAuth: true,
      };
    case SET_LOGOUT:
      return {
        ...state,

        isAuth: false,
      };
    default:
      return state;
  }
};

export default users;

// ------------ActionCreators
export const setAuthUserData = ({ data }) => ({
  type: SET_USER_DATA,
  payload: { data },
});
export const logout = () => ({
  type: SET_LOGOUT,
});

// ------------ThunkCreators
export const loginAuth = (obj) => {
  return async (dispatch) => {
    try {
      instance
        .post(`/api/auth/user`, {
          clientId: 1,
          email: obj.email,
          password: obj.password,
        })
        .then(async ({ data }) => {
          localStorage.setItem("userToken", data.data.accessToken);
          const useInfo = await instance.get(`/api/tager/user/profile`, {
            headers: {
              Authorization: "Bearer " + data.data.accessToken,
            },
          });

          return useInfo;
        })
        .then(({ data }) => {
          localStorage.setItem("userInfo", JSON.stringify(data.data));
          dispatch(setAuthUserData(data));
        });
    } catch (e) {
      console.log(e);
    }
  };
};
