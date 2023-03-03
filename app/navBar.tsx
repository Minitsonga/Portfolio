import "./navBar.css";
import styles from "./button.module.css";


export default function GlobalNavBar() {
  return (
    <nav>
      <div className="logo"></div>
      <div className="flex">
        <li>
          <a href="#about">
            <p className="r">[</p>
            <div className="textLink">About me </div>
            <p className="r">]</p>
          </a>
        </li>
        <li>
          <a href="#jobs">
            <p className="r">[</p>
            <div className="textLink ">Experience</div>
            <p className="r">]</p>
          </a>
        </li>
        <li>
          <a href="#projects">
            <p className="r">[</p>
            <div className="textLink">Projets</div>
            <p className="r">]</p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <p className="r">[</p>
            <div className="textLink">Contacts</div>
            <p className="r">]</p>
          </a>
        </li>

        <button className={styles.btn}>
          <a className="" href="/resume.pdf" target="_blank">Mon CV</a>
        </button>
      </div>
    </nav>
  );
}
