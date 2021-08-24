import PricingComponent from "./components/PricingComponent";

import { Container, Intro } from "./modules/App.module.scss";

const App = () => (
  <div className={Container}>
    <div className={Intro}>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
    </div>
    <PricingComponent />
  </div>
);

export default App;
