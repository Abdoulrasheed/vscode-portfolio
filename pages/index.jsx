import Image from "next/image";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/HomePage.module.css";
import {
  faGithubAlt,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4 className={styles.welcome}>Hello, I'm</h4>
        <h1 className={styles.title}>Abdulrasheed Ibrahim</h1>
        <h3 className={styles.subtitle}>Mobile / Web Developer</h3>
        <ul className={styles.contacts}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:hello@abdull.dev">
              hello@abdull.dev
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarker} />
            <a
              target="blank"
              href="https://www.google.com/maps/place/Yola/@9.1982456,12.4179893,12z/data=!3m1!4b1!4m5!3m4!1s0x10fc6b61b99ecf89:0xec813b40178416c7!8m2!3d9.2034963!4d12.4953899"
            >
              Yola, Nigeria
            </a>{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a href="tel:+2347033389645">+2347033389645</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithubAlt} />
            <a href="https://github.com/Abdoulrasheed">Github</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/abdulrasheed-ibrahim-2b3a90103/">
              Linkedin
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
            <a href="https://twitter.com/Aiibrahim3">Twitter</a>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.picture_boader}>
          <Image
            className={styles.picture}
            src="/me.jpg"
            width={300}
            height={290}
            alt="Abdulrasheed's picture"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
