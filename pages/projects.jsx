import React from "react";
import Carousel from "react-grid-carousel";
import {
  faArrowRight,
  faArrowLeft,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/ProjectPage.module.css";
import ImgsViewer from "react-images-viewer";
import {
  faGithub,
  faGooglePay,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const projects = [
  {
    name: "Trade It",
    category: "Mobile App",
    description:
      "Trade it is a mobile application for Android and IoS that allows users to see listings of items for sale near them, users can be able to change the distance rate between them and the listings they see in kilometers.",
    pictures: [
      { src: "/projects/tradeit_0.png" },
      { src: "/projects/tradeit_1.png" },
      { src: "/projects/tradeit_2.png" },
      { src: "/projects/tradeit_3.png" },
      { src: "/projects/tradeit_4.png" },
    ],
    download_link:
      "https://mega.nz/file/yLoWQS6R#Qtj_IgsgaB3uWcaiytx_KHgq3k8GGjmd5_PFRVT2Cbk",
    github_repo: "",
    stack: [
      "React Native",
      "JavaScript",
      "Amazon AppSync",
      "Amazon Cognito",
      "Amazon Elasticsearch (With Kibana)",
      "Git",
    ],
  },

  {
    name: "Alvice X",
    category: "Mobile App",
    description:
      "Alvice X is a cryptocurrency mobile exchange platform where you get to buy, hodl, send and receive Bitcoin and Ether.",
    pictures: [
      { src: "/projects/alvice_0.png" },
      { src: "/projects/alvice_1.png" },
      { src: "/projects/alvice_2.png" },
      { src: "/projects/alvice_3.png" },
    ],
    download_link:
      "https://mega.nz/file/WHwkSYqT#C8-3IVsDhlhqrbmCNEQcumh3gDEFmsJm1X-H4nAsaCE",
    github_repo: "",
    stack: [
      "React Native",
      "Python",
      "JavaScript",
      "Amazon Cognito",
      "Amazon AppSync",
      "Git",
    ],
  },
  {
    name: "Bitsmss",
    category: "Web App",
    description:
      "Bitpoint School Management System (Bitsms) is a full blown enterprise and a multitenant school automation web software with multiple and extensible user roles. it has about 100+ features which includes but not limited score / grade management, rankings, payments, media uploads and file management, reporting , and etc.",
    pictures: [
      { src: "/projects/bitsmss_0.png" },
      { src: "/projects/bitsmss_1.png" },
      { src: "/projects/bitsmss_2.png" },
      { src: "/projects/bitsmss_3.png" },
    ],
    live_link: "http://demo.bitsmss.com/",
    github_repo: "",
    creds: {
      username: "demo",
      password: "demo555",
      desc: "Admin Login Credentials",
    },
    stack: [
      "Django",
      "PostgreSQL",
      "JavaScript",
      "Amazon Elastic Beanstalk",
      "Amazon S3",
      "Git",
    ],
  },
];

const ProjectsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.container}>
      <span>{}</span>
      <Carousel
        cols={1}
        rows={1}
        gap={1}
        showDots
        mobileBreakpoint={670}
        containerClassName={styles.carousel}
        arrowRight={
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.icon}
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
          />
        }
        arrowLeft={
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={styles.icon}
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          />
        }
      >
        {projects.map((item, key) => (
          <Carousel.Item key={key}>
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <p>
                  <strong className={styles.label}>Name:</strong> {item.name}
                </p>
                <p>
                  <strong className={styles.label}>Category:</strong>{" "}
                  {item.category}
                </p>
                <summary>
                  <strong className={styles.label}>Description:</strong>{" "}
                  {item.description}
                </summary>
                <p className={styles.label}>Technology Stack:</p>
                <ul className={styles.stackContainer}>
                  {item.stack.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <div className={styles.urls}>
                  {item.live_link && (
                    <p>
                      <a href={item.live_link} target="blank">
                        <FontAwesomeIcon icon={faLink} /> Preview
                      </a>
                    </p>
                  )}
                  {item.download_link && (
                    <p>
                      <a href={item.download_link} target="blank">
                        <FontAwesomeIcon icon={faGooglePlay} /> Download App
                      </a>
                    </p>
                  )}
                  {item.github_repo && (
                    <p>
                      <a href={item.github_repo} target="blank">
                        <FontAwesomeIcon icon={faGithub} /> Github
                      </a>
                    </p>
                  )}
                </div>
                {item.creds && (
                  <div>
                    <label className={styles.label}>{item.creds.desc}</label>
                    <p>
                      <strong>Username: {item.creds.username}</strong>
                    </p>
                    <p>
                      <strong>Username: {item.creds.password}</strong>
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.cardImageContainer}>
                {item.pictures.map((item, index) => (
                  <img
                    src={item.src}
                    className={styles.cardImage}
                    onClick={() => {
                      setCurrentImage(index);
                      setisOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <ImgsViewer
        imgs={projects[currentIndex].pictures}
        currImg={currentImage}
        isOpen={isOpen}
        onClickPrev={() => setCurrentImage(currentImage - 1)}
        onClickNext={() => setCurrentImage(currentImage + 1)}
        onClose={() => {
          setCurrentImage(0);
          setisOpen(false);
        }}
      />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}

export default ProjectsPage;
