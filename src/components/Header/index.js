import { Link } from "react-router-dom";
import PartyLogo from "../../assets/JANAM MANA PARTY.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img alt="logo" className="logo" src={PartyLogo} />
        </Link>
      </div>
      <div className="nav-items">
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/campaigns">Campaigns</Link>
            </li>
          </ul>
        </div>
        <div className="contact-nav-item">Contact</div>
      </div>
    </div>
  );
};

export default Header;
