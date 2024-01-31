import { LOGO_URL } from "../../utils/constants";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Campaigns</li>
          </ul>
        </div>
        <div className="contact-nav-item">Contact</div>
      </div>
    </div>
  );
};

export default Header;
