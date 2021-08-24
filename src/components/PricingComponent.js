import Pricing from "./Pricing";
import Info from "./Info";
import checkMark from "../images/icon-check.svg";

import {
  Container,
  Intro,
  PricingBody,
} from "../modules/PricingComponent.module.scss";

const texts = ["Unlimited Websites", "100% data ownership", "Email reports"];

const PricingComponent = () => (
  <div className={Container}>
    <div className={Intro}>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
    </div>
    <div className={PricingBody}>
      <div>
        <Pricing />
      </div>
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
  </div>
);

export default PricingComponent;
