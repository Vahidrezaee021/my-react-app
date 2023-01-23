import styled from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={styled.navbarWrapper}>
      <div className="container">
        <div className={styled.navbar}>
          <ul>
            <li>
              <h3>{props.title}</h3>
            </li>
            <li>لیست مقالات</li>
            <li>مقاله جدید</li>
            <li>درباره ما</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
