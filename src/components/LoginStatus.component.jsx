import { useSelector } from "react-redux";

const LoginStatus = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return <h1>{loggedIn ? "Logged in" : "Logged out"}</h1>;
};

export default LoginStatus;
