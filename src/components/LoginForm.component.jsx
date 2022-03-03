import { useState, useEffect } from "react";
import axios from "axios";

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
      {loggedIn && (
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
