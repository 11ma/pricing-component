import { useState } from "react";
import Switch from "react-switch";

const Pricing = () => {
  const [price, setPrice] = useState(0);
  const [check, setCheck] = useState(false);

  const handleRangeSlider = (event) => {
    const priceValue = event.target.value;
    setPrice(priceValue);
  };

  const handleChange = () => {
    setCheck(!check);
  };

  const checkMonthOrYear = () => {
    return check ? "year" : "month";
  };

  const applyDiscount = () => {
    return check ? price - price * 0.25 : price;
  };

  return (
    <div>
      <div>
        <div>
          <p>100K PAGEVIEWS</p>
          <p>
            £{applyDiscount()}/{checkMonthOrYear()}
          </p>
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
          <p>25% discount</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
