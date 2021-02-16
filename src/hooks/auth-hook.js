import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/actions/userActions";

let logoutTimer;

export const useAuth = () => {
  const { token, tokenExpDate } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const Logout = logout(dispatch);
  const Login = login(dispatch);

  useEffect(() => {
    if (token && tokenExpDate) {
      const remainingTime =
        new Date(tokenExpDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(Logout, remainingTime);
    } else {
      clearTimeout(logoutTimer); // to need to triger again
    }
  }, [token, Logout, tokenExpDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      Login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);
};
