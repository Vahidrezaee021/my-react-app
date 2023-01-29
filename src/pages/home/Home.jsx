import { useEffect, useState } from "react";
import Articles from "../../components/Articles/Articles";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./Home.module.css";
import axios from "axios";
import Footer from "../../components/Footer/Footer"

function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="سایت من" />
      <div className="container">
        <h2>مقالات جدید</h2>
        <div className={styled.articles}>
          {articles.map((article) => (
            <Articles key={article.id} article={article} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
