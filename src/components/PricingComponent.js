import Pricing from "./Pricing";
import Info from "./Info";
import checkMark from "../images/icon-check.svg";

const texts = ["Unlimited Websites", "100% data ownership", "Email reports"];

const PricingComponent = () => (
  <div>
    <h1>Simple, traffic-based pricing</h1>
    <p>Sign-up for our 30-day trial. No credit card required.</p>
    <Pricing />
    <div>
      <div>
        {texts.map((text) => (
          <Info key={text} src={checkMark} alt="checkMark" text={text} />
        ))}
      </div>
      <div>
        <button>Start my trial</button>
      </div>
    </div>
  </div>
);

export default PricingComponent;
