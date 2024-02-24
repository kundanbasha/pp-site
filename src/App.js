import BannerComponent from "./components/BannerComponent";
import Header from "./components/Header";
import LandingContent from "./components/LandingContent";
import "./App.css";
import PromotionCard from "./components/Promotion-card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BannerComponent />
      <LandingContent />
      <PromotionCard />
      <Footer />
    </>
  );
};

export default App;
