import { useEffect, useState } from "react";

const TimeComponent = () => {
  let intervalID;
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    intervalID = setInterval(() => {
      setTime(new Date());
      console.log("loop");
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </div>
  );
};

export default TimeComponent;
