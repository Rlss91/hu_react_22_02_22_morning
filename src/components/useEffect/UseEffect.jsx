import { useEffect } from "react";

const UseEffect = () => {
  //when component loaded
  useEffect(() => {
    console.log("component loaded");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((dataFromServer) => console.log(dataFromServer));
  }, []);
  return <h1>Use effect component</h1>;
};

export default UseEffect;
