import styled from "./Articles.module.css";
import al from "../../assets/images/al.jfif";

function Articles() {
  return (
    <div className={styled.articleWrapper}>
      <img src={al}></img>
    </div>
  );
}

export default Articles;
