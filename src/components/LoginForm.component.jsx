import { useState, useEffect } from "react";

/*
  {
    "name": "kenny",
    "email": "kenny@gmail.com",
    "password": "Aa123456",
    "biz": true
  }
*/
async function postData(url = "", data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      //error from server
      //for example email and/or password incorrect
      return response.text().then((text) => {
        throw new Error(text);
      });
    }
  });
  // return response.json(); // parses JSON response into native JavaScript objects
}
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
      postData("http://localhost:8181/api/users/login", {
        email,
        password,
      })
        .then((res) => {
          console.log("res from server", res);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log("error from server", err);
          setLoggedIn(false);
          alert(err);
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
