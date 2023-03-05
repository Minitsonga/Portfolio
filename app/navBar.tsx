import "./navBar.css";
import styles from "./button.module.css";

export default function GlobalNavBar() {
  return (
    <div className="flex justify-center items-center flex-col fixed top-2/4 left-auto right-20 w-12 h-auto">
      <div className="border-l-2"></div>
      <ul className="mb-4">
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
          <a className="" href="/resume.pdf" target="_blank">
            Mon CV
          </a>
        </button>
      </ul>
      {/* <div className="border-l-2 pt-40"></div> */}
    </div>
  );
}
