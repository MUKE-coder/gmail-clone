import React from "react";
import "./Login.css";
import gmail from "./gmail.png";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        dispatch(
          login({
            displayName: user.user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={gmail} alt="" className="logo" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login with Gmail
        </Button>
      </div>
    </div>
  );
};

export default Login;
