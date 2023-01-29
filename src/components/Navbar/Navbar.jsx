import styled from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={styled.navbarWrapper}>
      <div className="container">
        <div className={styled.navbar}>
          <ul>
            <li>
              <h3>{props.title}</h3>
            </li>
            <li>
              <Link to="/">لیست مقالات</Link>
            </li>
            <li>
              <Link to="/">مقاله جدید</Link>
            </li>
            <li>
              <Link to="about">درباره ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
