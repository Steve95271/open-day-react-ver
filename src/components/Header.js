import React from "react";
import { formatTime } from "../utils/timeUtils";

const Header = ({ description, start_time, end_time }) => {
  return (
    <header className="main-header">
      <h1>{description}</h1>
      <h2>
        🕰️ <i>{formatTime(start_time)}</i> - <i>{formatTime(end_time)}</i>
      </h2>
    </header>
  );
};

export default Header;
