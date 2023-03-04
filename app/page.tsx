import "./pageInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function PageInfo() {
  return (
    <section className="px-12 md:px-28 xl:px-52 2xl:px-96">
      <div className="content">
        <h1>Hello, Next.js!</h1>
        {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
        <p className="text-3xl text-white">
          Im a new fdp qui va tous vous tuer bande de connard
        </p>
      </div>
    </section>
  );
}
