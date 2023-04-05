import navBar from "./navBar.module.css";

export default function GlobalNavBar() {
  return (
    <div className={navBar.holder}>
      <ul className="mt-3.5">
        <li>
          <a href="/#about">
            <p className="r">[</p>
            <div className={navBar.textLink}>About me</div>
            <p className="r">]</p>
          </a>
        </li>
        {/* <li>
          <a href="#jobs">
            <p className="r">[</p>
            <div className={navBar.textLink}>Experiences</div>
            <p className="r">]</p>
          </a>
        </li> */}
        <li>
          <a href="/#projets">
            <p className="r">[</p>
            <div className={navBar.textLink}>Projets</div>
            <p className="r">]</p>
          </a>
        </li>
        <li>
          <a href="/#contact">
            <p className="r">[</p>
            <div className={navBar.textLink}>Contact</div>
            <p className="r">]</p>
          </a>
        </li>
      </ul>
      <button className={navBar.btn}>
        <a className="text-lg" href="/resume.pdf" target="_blank">
          Mon CV
        </a>
      </button>
    </div>
  );
}
