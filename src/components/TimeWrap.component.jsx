import { Fragment, useState } from "react";
import TimeComponent from "./Time.component";

const TimeWrap = () => {
  const [showTime, setShowTime] = useState(true);
  const handleClickStopTime = () => {
    setShowTime(!showTime);
  };
  return (
    <Fragment>
      <button onClick={handleClickStopTime}>stop time</button>
      {showTime && <TimeComponent></TimeComponent>}
    </Fragment>
  );
};

export default TimeWrap;
