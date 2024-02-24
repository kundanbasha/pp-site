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
            ప్లాట్ నెం.12, రోడ్ నెం.72, ప్రశాసన్ నగర్, జూబ్లిహిల్స్, హైదరాబాద్,
            తెలంగాణా 500033 పోన్: 040-23545990 Mail: contact@janasenaparty.org,
            media@janasenaparty.org For any suggestion or feedback mail to
            feedback@janasenaparty.org <br />
            or
            <br /> Whatsapp Number:6304900667
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
