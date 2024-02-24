import "./banner.css";
import PartyLogo from "../../assets/JANAM MANA PARTY.svg";

const BannerComponent = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h3 className="banner-label">జనం మనం పార్టీ for better life</h3>
        <h1 className="banner-title">
          నువ్వు చూడాలనుకున్న మార్పు….. <br />
          <span
            className="banner-title"
            style={{ marginLeft: "25%", lineHeight: "80px" }}
          >
            నీతోనే, నినుంచే మొదలవ్వాలి…..
          </span>
        </h1>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <h3 className="contact-title">
            ఉన్నత జీవితాల కోసం, ప్రతి ఒకరికి Accountability (జవాబుదారీతనం) and
            Responsibility (బాధ్యత) ఉండాలి. ఇది జనం మనం పార్టీ మాట, బాట
          </h3>
          {/* <p className="contact-link">Contact us</p> */}
        </div>
        <div className="quick-links-container">
          <div className="party-logo-container">
            <img alt="rounded logo" src={PartyLogo} />
          </div>
          <div className="media-links">
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
