import navBar from "./navBar.module.css";

export default function GlobalNavBar() {
  return (
    <div className={navBar.navigation}>
      <div className="border-l-2"></div>
      <div className="flex flex-col justify-center m-auto">
        <ul className="mb-4">
          <li>
            <a href="#about">
              <p className="r">[</p>
              <div className={navBar.textLink}>About me </div>
              <p className="r">]</p>
            </a>
          </li>
          <li>
            <a href="#jobs">
              <p className="r">[</p>
              <div className={navBar.textLink}>Experience</div>
              <p className="r">]</p>
            </a>
          </li>
          <li>
            <a href="#projects">
              <p className="r">[</p>
              <div className={navBar.textLink}>Projets</div>
              <p className="r">]</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p className="r">[</p>
              <div className={navBar.textLink}>Contacts</div>
              <p className="r">]</p>
            </a>
          </li>
        </ul>
        <button className={navBar.btn} >
          <a className="" href="/resume.pdf" target="_blank">
            Mon CV
          </a>
        </button>
      </div>
      {/* <div className="border-l-2 pt-40"></div> */}
    </div>
  );
}
