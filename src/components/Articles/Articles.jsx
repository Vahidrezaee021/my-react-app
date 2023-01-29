import styled from "./Articles.module.css";

function Articles(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl}></img>
      <h3>{props.article.title}</h3>
      <span>زمان مطالعه: {props.article.readingTime} دقیقه</span>
      <span></span>
    </div>
  );
}

export default Articles;
