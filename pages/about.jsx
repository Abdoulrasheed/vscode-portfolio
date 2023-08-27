import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightScreen}>
        <Image
          className={styles.picture}
          src="/code.png"
          width={450}
          height={280}
          alt="Code Avatar"
        />
      </div>
      <div className={styles.leftScreen}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.about}>
          I'm a Professional Software Engineer, Skilled in Python, Django, JavaScript, React.js, React Native, Next.js, Redux, Flask, PostgreSQL, AWS, and DevOps with a passion for exploring research-based topics relating to Blockchain and Artificial Intelligence particularly the field of Computer vision, Image processing, and Natural Language Language Processing.<br></br><br></br>I'm an experienced Web (FullStack) and Mobile Developer with seven years of experience.<br></br><br></br>I've built, deployed, and maintained several software solutions that aid to meet consumers' business requirements and increasing productivity for various organizations.<br></br><br></br>Those solutions range from Android and iOS applications, blockchain, and banking applications to web and desktop solutions. some of my skills include:
        </p>
        <ul className={styles.skillList}>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>TypeScript</span>
          </li>
          <li>
            <span>Python</span>
          </li>
          <li>
            <span>Django</span>
          </li>
          <li>
            <span>ReactJS</span>
          </li>
          <li>
            <span>React Native</span>
          </li>
          <li>
            <span>AWS</span>
          </li>
          <li>
            <span>Redux</span>
          </li>
          <li>
            <span>Web Scrapping</span>
          </li>
          <li>
            <span>Blochain Development</span>
          </li>
          <li>
            <span>NodeJs</span>
          </li>
          <li>
            <span>RabbitMQ</span>
          </li>
          <li>
            <span>Kafka</span>
          </li>
          <li>
            <span>Kibana</span>
          </li>
          <li>
            <span>NginX</span>
          </li>
          <li>
            <span>Machine Learning</span>
          </li>
        </ul>
        <a
          className={styles.resumeButton}
          href="https://www.abdull.dev/resume.pdf"
          target="_blank"
        >
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
