import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./Firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="http://www.freelogovectors.net/svg07/new_gmail_logo.svg"
          alt=""
        />
        <Button color="primary" variant="contained" onClick={signIn} >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
