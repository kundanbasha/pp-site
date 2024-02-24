import Container from "../Container";
import ValunteerIcon from "../../assets/icon_member.jpg";
import DonationIcon from "../../assets/icon_donate.jpg";
import "./promotion-card.css";

const PromotionCard = () => {
  return (
    <Container>
      <div className="promotion-container">
        <div className="promotion-valunteer">
          <img src={ValunteerIcon} />
          <h3>వాలంటీర్</h3>
          <p>
            వాలంటీర్ ఫర్ JMP సమాజంలో మంచి మార్పు తీసుకు రావడం కోసం JMP పార్టీతో
            కలిసి ముందడుగు వెయ్యండి
          </p>
        </div>
        <div className="promotion-joinus">
          <h3>JOIN THE MOVEMENT</h3>
          <p>JMP సభ్యత్వం పొందటం కోసం మిస్సిడ్ కాల్ ఇవ్వండి</p>
          <a className="msdcall" href="tel:+919394022222">
            +91 9391312314
          </a>
        </div>
        <div className="promotion-donation">
          <img src={DonationIcon} />
          <h3>డొనేషన్స్</h3>
          <p>
            అందరి అభివృద్ధి కోసం, సామాజిక సమతుల్యం కోసం పోరాడే JMP పార్టీకి నా
            వంతు సహకారం
          </p>
        </div>
      </div>
    </Container>
  );
};
export default PromotionCard;
