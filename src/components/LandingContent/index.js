import "./landing-content.css";
import ManifestoList from "../ManifestoList";
import Container from "../Container";

const LandingContent = () => {
  return (
    <div className="content-container">
      <div className="content-img">
        <ManifestoList />
      </div>
      <Container>
        <div className="content">
          <p className="content-description">
            Janam Manam Party is not just a political entity; it is a movement,
            a movement towards a brighter future, guided by the collective
            aspirations and dreams of every citizen. Join us in this journey of
            empowerment, progress, and transformation. Together, we can build a
            better Andhra Pradesh, where the dignity and well-being of every
            individual are upheld, and where the promise of a better tomorrow
            shines bright for all. <br />
            <strong>Janam Manam Party - For the People, By the People!</strong>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LandingContent;
