import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <li>
        <Link to={"/"}>계산기</Link>
      </li>
      <li>
        <Link to={"/about"}>about</Link>
      </li>
    </header>
  );
}
export default Header;
