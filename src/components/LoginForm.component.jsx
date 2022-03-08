import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Joi from "joi-browser";

import loginSchema from "../validation/login.validation";
import { authActions } from "../store/auth";

/*
  {
    "name": "kenny",
    "email": "kenny@gmail.com",
    "password": "Aa123456",
    "biz": true
  }
*/

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  //for redux actions
  const dispatch = useDispatch();
  const loggedInRedux = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    console.log("loggedIn", loggedIn);
  }, [loggedIn]);

  const handleEmailChange = (event) => {
    // console.log("event", event);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOnSubmit = (event) => {
    //prevent the form to do refresh
    event.preventDefault();
    const validatedValue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    console.log("validatedValue", validatedValue);
    const { error } = validatedValue;
    if (error) {
      //invalid email or password
    } else {
      //email and password is good
    }
    if (email !== "" && password !== "") {
      // setLoggedIn(true);
      axios
        .post("/users/login", {
          email,
          password,
        })
        .then((res) => {
          console.log("res from server", res);
          console.log("token", res.data.token);
          dispatch(authActions.login());
          localStorage.setItem("tokenKey", res.data.token);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log("error from server", err);
          if (err.response) {
            console.log("err.response", err.response);
            alert(err.response.data);
          }
          // if (err.request) {
          //   console.log("err.request", err.request);
          // }
          // if (err.message) {
          //   console.log("err.message", err.message);
          // }
          // console.log("err.config", err.config);
          // localStorage.removeItem("tokenKey");
          localStorage.clear();
          setLoggedIn(false);
          // alert(err);
        });
    }
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      ></input>
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <br />
      <button>login</button>
      {/* like ngIf */}
      {loggedInRedux && (
        <div>
          your email is: {email}
          <br />
          your password is: {password}
        </div>
      )}
    </form>
  );
};

export default LoginForm;
