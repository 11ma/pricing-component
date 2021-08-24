import Pricing from "./Pricing";
import Info from "./Info";
import checkMark from "../images/icon-check.svg";

import {
  Container,
  PricingBody,
  InfoBody,
  InfoText,
  InfoBtn,
} from "../modules/PricingComponent.module.scss";

const texts = ["Unlimited Websites", "100% data ownership", "Email reports"];

const PricingComponent = () => (
  <div className={Container}>
    <div className={PricingBody}>
      <Pricing />
      <div className={InfoBody}>
        <ul className={InfoText}>
          {texts.map((text) => (
            <Info key={text} src={checkMark} alt="checkMark" text={text} />
          ))}
        </ul>
        <div className={InfoBtn}>
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  </div>
);

export default PricingComponent;
