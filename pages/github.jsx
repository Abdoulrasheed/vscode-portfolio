import { useState, useEffect } from "react";
import Image from "next/image";
import {
  faStar,
  faCodeBranch,
  faUsers,
  faCircle,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/GithubPage.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubPage = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    fetch(
      "https://api.github.com/users/abdoulrasheed/repos?sort=updated&direction=desc&per_page=12"
    )
      .then((response) => response.json())
      .then((data) => setData(data));

    fetch("https://api.github.com/users/abdoulrasheed")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {user.avatar_url && (
          <a title="View on Github" href={user.html_url} target="blank">
            <Image
              src={user.avatar_url}
              width={80}
              height={80}
              className={styles.githubAvatar}
            />
          </a>
        )}
        <span>
          <a href={`${user.html_url}?tab=repositories`} target="blank">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />{" "}
            {user.public_repos} Public Repos
          </a>
        </span>

        <span>
          <a href={user.followers_url}>
            <FontAwesomeIcon icon={faUsers} className={styles.icon} />{" "}
            {`${user.followers} Followers`}
          </a>
        </span>
      </div>
      <h4 className={styles.title}>
        {data.length} Recently Updated Repositories
      </h4>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>{item.name}</h2>
            <p className={styles.cardDescription}>{item.description}</p>
            <ul className={styles.repositoryDetails}>
              <li title="Language" className={styles.cardRepoLang}>
                <FontAwesomeIcon icon={faCircle} /> {item.language}
              </li>
              <li title="Stars">
                <FontAwesomeIcon icon={faStar} className={styles.icon} />{" "}
                {item.stargazers_count}
              </li>
              <li title="Forks">
                <FontAwesomeIcon icon={faCodeBranch} className={styles.icon} />{" "}
                {item.forks_count}
              </li>
              <li title="View on Github">
                <a href={item.html_url} target="blank">
                  <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </a>
              </li>
              {item.homepage && (
                <li title="View live preview">
                  <a href={item.homepage} target="blank">
                    <FontAwesomeIcon icon={faLink} className={styles.icon} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Github" },
  };
}

export default GithubPage;
