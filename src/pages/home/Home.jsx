import Articles from "../../components/Articles/Articles";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./Home.module.css";

function Home() {
  return (
    <div className={styled.homeWrapper}>
      <Navbar title="سایت من" />
      <div className="container">
        <h2>مقالات جدید</h2>
        <div className={styled.articles}>
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default Home;
