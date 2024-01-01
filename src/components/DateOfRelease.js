import React from "react";
import "./DateOfRelease.css";

function DateOfRelease(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date-of-release">
      <div className="date-of-release-label">Date Of Release:</div>
      <div className="date-of-release-year">{year}</div>
      <div className="date-of-release-month">{month}</div>
      <div className="date-of-release-day">{day}</div>
    </div>
  );
}

export default DateOfRelease;
