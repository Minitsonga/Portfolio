import "./pageInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  thin,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { UitGithubAlt, UitLinkedinAlt, UitTwitterAlt  } from "@iconscout/react-unicons-thinline";


export default function SideLinks() {
  return (
    <div className="w-12 fixed bottom-0 left-10 right-auto">
      <ul>
        <li>
          <a className="hover:text-bluey-snd cursor-pointer" href="">
            <UitGithubAlt />
          </a>
        </li>
        <li>
          <a className="hover:text-bluey-snd cursor-pointer" href="">
            <UitLinkedinAlt />
          </a>
        </li>
        <li>
          <a className="hover:text-bluey-snd cursor-pointer" href="">
            <UitTwitterAlt />
          </a>
        </li>

        <li>
          <a className="hover:text-bluey-snd cursor-pointer" href="">
            <FontAwesomeIcon icon={thin("globe")} />
          </a>
        </li>
      </ul>
    </div>
  );
}
