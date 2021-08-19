import { useState } from "react";
import Switch from "react-switch";

function App() {
  const [price, setPrice] = useState(0);
  const [check, setCheck] = useState(false);

  const handleRangeSlider = (event) => {
    setPrice(event.target.value);
  };

  const handleChange = () => {
    setCheck(!check);
    console.log(check);
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
            <p>monthly billing</p>
            <label>
              <Switch
                onChange={handleChange}
                checked={check}
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </label>
            <p>yearly billing</p>
          </div>
          <p> checked value: {check.toString()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
