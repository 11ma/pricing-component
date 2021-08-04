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
          <div>
            <p>100k PageViews</p>
            <p>£{price}/month</p>
          </div>
          <input
            type="range"
            min="13"
            step="3"
            max="19"
            value={price}
            onChange={handleRangeSlider}
          />
          <div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
