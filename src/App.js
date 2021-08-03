import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);

  const handleRangeSlider = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
      <div>
        <div>
          <p>100k PageViews</p>
          <p>£{price}/month</p>
          <input
            type="range"
            min="1"
            max="100"
            value={price}
            onChange={handleRangeSlider}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
