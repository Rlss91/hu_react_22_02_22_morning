import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../store/auth";

const UpdateToken = () => {
  const [inputToken, setInputToken] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleTxtChange = (ev) => {
    setInputToken(ev.target.value);
  };

  const handleBtnClick = () => {
    dispatch(authActions.updateToken(inputToken));
  };

  return (
    <div>
      <input type="text" value={inputToken} onChange={handleTxtChange} />
      <button onClick={handleBtnClick}>Click me</button>
      <h1>{token}</h1>
    </div>
  );
};

export default UpdateToken;
