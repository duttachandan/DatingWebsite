import React, { createContext, useReducer, useEffect } from "react";
import { userLogin, generateQrCode } from "../Services";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    qrCode: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload.user,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case "QRCODE":
        return {
          ...state,
          qrCode: action.payload.qrCode,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const logIn = async (username, password) => {
    try {
      const response = await userLogin(username, password);
      dispatch({ type: "LOGIN", payload: { user: response } });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  const QrCode = async () => {
    try{
      const response = await generateQrCode();
      console.log(response);
      dispatch({ type: "QRCODE", payload: { qrCode: response.qrCode } });
    }catch (error) {
      console.log(error.message);
    }
  }

  return (
    <LoginContext.Provider value={{ state, logIn, logOut, QrCode }}>
      {children}
    </LoginContext.Provider>
  );
};
