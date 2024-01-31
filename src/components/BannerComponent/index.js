import "./banner.css";
import RoundedLogo from "../../assets/rounded-logo.png";

const BannerComponent = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h3 className="banner-label">a conservative approach for Hyd</h3>
        <h1 className="banner-title">Be a leader, don't be a politician.</h1>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <h3 className="contact-title">
            Contact Conservatiove today to get involved
          </h3>
          <p className="contact-link">Contact us</p>
        </div>
        <div className="quick-links-container">
          <div className="party-logo-container">
            <img alt="rounded logo" src={RoundedLogo} />
          </div>
          <div className="media-links">
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
