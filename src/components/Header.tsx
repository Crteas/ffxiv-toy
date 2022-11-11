import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const E_TIME = 20.5714285714;
  type globals = {
    eorzeaTime: Date | number;
    utcTime: Date | number;
  };
  const global: globals = {
    utcTime: 0,
    eorzeaTime: 0,
  };
  useEffect(updateClock);
  useEffect(() => {
    window.setInterval(updateClock, Math.floor((1000 * 60) / E_TIME));
  });

  function updateClock() {
    global.utcTime = new Date().getTime();
    const eo_timestamp = Math.floor(global.utcTime * E_TIME);
    global.eorzeaTime = new Date();
    global.eorzeaTime.setTime(eo_timestamp);
    showTime();
  }

  function showTime() {
    const d = new Date();
    d.setTime(global.eorzeaTime as number);
    let hours = d.getUTCHours();
    // var ampm = hours > 11 ? "PM" : "AM";
    // if (hours > 12) hours -= 12;
    setHours(hours);
    let minutes = d.getUTCMinutes();
    setMinute(minutes);
  }

  return (
    <>
      <header>
        <li>
          <Link to={"/"}>계산기</Link>
        </li>
        <li>
          <Link to={"/about"}>about</Link>
        </li>
      </header>
      <div style={{ fontSize: 30 }}>{`ET : ${hours}:${minute
        .toString()
        .padStart(2, "0")}`}</div>
    </>
  );
}

export default Header;
