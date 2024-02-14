import "./landing-content.css";
import ManifestoList from "../ManifestoList";

const LandingContent = () => {
  return (
    <div className="content-container">
      <div className="content-img">
        <ManifestoList />
      </div>
      <div className="content">
        <h2 className="content-title">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <p className="content-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
    </div>
  );
};

export default LandingContent;
