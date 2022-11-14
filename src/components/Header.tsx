import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 75px;
  background: linear-gradient(to bottom, #303952, rgba(89, 98, 117, 0));
  color: #f7d794;
`;

const Logo = styled.div`
  margin-left: 10px;
  font-size: 48px;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
  box-sizing: border-box;
`;
const Item = styled.div`
  margin-right: 20px;
  a {
    text-decoration: none;
    color: #f7d794;
  }
`;

const ETClock = styled.div`
  position: absolute;
  right: 10px;
  font-size: 30px;
`;

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
    <Nav>
      <Logo>
        <span>냐냐</span>
      </Logo>
      <Items>
        <Item>
          <Link to={"/"}>계산기</Link>
        </Item>
        <Item>
          <Link to={"/about"}>about</Link>
        </Item>
      </Items>
      <ETClock>{`ET : ${hours}:${minute.toString().padStart(2, "0")}`}</ETClock>
    </Nav>
  );
}

export default Header;
