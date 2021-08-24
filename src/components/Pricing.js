import { useState } from "react";
import Switch from "react-switch";

import {
  Container,
  PriceContainer,
  PageViews,
  Price,
  MonthYear,
  Slider,
  Billings,
} from "../modules/Pricing.module.scss";

const Pricing = () => {
  const [price, setPrice] = useState(0);
  const [check, setCheck] = useState(false);

  const handleRangeSlider = (event) => {
    const priceValue = Number.parseFloat(event.target.value);
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
    <div className={Container}>
      <div className={PriceContainer}>
        <p className={PageViews}>100K PAGEVIEWS</p>
        <p>
          <span className={Price}>
            £{Number.parseFloat(applyDiscount()).toFixed(2)}
          </span>
          /<span className={MonthYear}>{checkMonthOrYear()}</span>
        </p>
      </div>
      <input
        className={Slider}
        type="range"
        min="13"
        step="3"
        max="19"
        value={price}
        onChange={handleRangeSlider}
      />
      <div className={Billings}>
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
  );
};

export default Pricing;
