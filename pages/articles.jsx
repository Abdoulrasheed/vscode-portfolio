import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const res = await fetch(
        "https://dev.to/api/articles/me/published?per_page=6",
        {
          headers: {
            "api-key": process.env.DEV_TO_API_KEY,
          },
        }
      );
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3>
        Recent Posts from{" "}
        <a
          href="https://dev.to/abdoulrasheed"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Articles" },
    revalidate: 60,
  };
}

export default ArticlesPage;
