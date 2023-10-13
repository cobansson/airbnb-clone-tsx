import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import TypeScriptLogo from "../images/nav pictures/typescript.png"

export default function Footer() {
  return (
    <div className="footer">
      <h1>
        Powered by <FontAwesomeIcon icon={faReact} className="react-icon" spin/>{" "}
        <FontAwesomeIcon icon={faJsSquare} className="js-icon"/>
        <img src={TypeScriptLogo} className="ts-icon"/>
      </h1>
    </div>
  );
}
