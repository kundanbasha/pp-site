import { Link } from "react-router-dom";
import Container from "../Container";
import "./footer.css";

const Footer = () => {
  return (
    <Container>
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            ప్లాట్ నెం.xx, రోడ్ నెం.xxx, Balaji nagar, Nellore, Andhra pradesh
            500033 పోన్: 9391312314 <br />
            or
            <br /> Whatsapp Number:9391312314
          </p>
        </div>
        <div className="footer-quick-links">
          <h3>Quick links</h3>
          <ul>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/campaigns"}>Campaigns</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="footer-media">
          <h3>Media</h3>
          <ul>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>facebook</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
