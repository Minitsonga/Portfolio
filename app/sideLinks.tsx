import styles from "./css/sideLinks.module.css";

import { CiGlobe, CiTwitter, CiLinkedin, CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";



export default function SideLinks() {
  return (
    <div className={styles.holderLinks}>
      <ul className="mt-3.5 mb-4">
        <li>
          <a target={"_blank"} className="hover:text-bluey-snd cursor-pointer hover:-translate-y-1 hover:scale-110 duration-150" href="https://github.com/Minitsonga">
            <VscGithubAlt size="24px" />
          </a>
        </li>
        <li>
          <a target={"_blank"} className="hover:text-bluey-snd cursor-pointer hover:-translate-y-1 hover:scale-110 duration-150" href="https://www.linkedin.com/in/juvdm">
            <CiLinkedin size="24px" />
          </a>
        </li>
        <li>
          <a target={"_blank"} className="hover:text-bluey-snd cursor-pointer hover:-translate-y-1 hover:scale-110 duration-150" href="https://twitter.com/Minitsonga1">
            <CiTwitter size="24px" />
          </a>
        </li>

        <li>
          <a target={"_blank"} className="hover:text-bluey-snd cursor-pointer hover:-translate-y-1 hover:scale-110 duration-150" href="/">
            <CiGlobe size="24px" />
          </a>
        </li>

        
        <li>
          <a target={"_blank"} className="hover:text-bluey-snd cursor-pointer hover:-translate-y-1 hover:scale-110 duration-150"  href={"mailto:julienmv02@gmail.com"}>
            <CiMail size="24px"/>
          </a>
        </li>
      </ul>
      </div>
  );
}
