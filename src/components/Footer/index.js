import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div class="social d-flex justify-content-center">
        <a href="/#" className="link">
          <FontAwesomeIcon icon={faLinkedin} className="socialMedia" />
        </a>
        <a href="/#" className="link">
          <FontAwesomeIcon icon={faGithub} className="socialMedia" />
        </a>
        <a href="/#" className="link">
          <FontAwesomeIcon icon={faTwitter} className="socialMedia" />
        </a>
        <a href="/#" className="link">
          <FontAwesomeIcon icon={faFacebook} className="socialMedia" />
        </a>
      </div>
      <p className="rights">My Website 2020. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
