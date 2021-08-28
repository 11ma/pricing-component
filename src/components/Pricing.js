import { useState } from "react";
import Switch from "react-switch";

import {
  Container,
  PriceContainer,
  PageViews,
  PriceMonthYear,
  PriceMonthYearMobile,
  Price,
  MonthYear,
  Slider,
  Billings,
  Discount,
  DiscountMobile,
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
        <p className={PriceMonthYear}>
          <span className={Price}>
            £{Number.parseFloat(applyDiscount()).toFixed(2)}
          </span>{" "}
          / <span className={MonthYear}>{checkMonthOrYear()}</span>
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
      <p className={PriceMonthYearMobile}>
        <span className={Price}>
          £{Number.parseFloat(applyDiscount()).toFixed(2)}
        </span>{" "}
        / <span className={MonthYear}>{checkMonthOrYear()}</span>
      </p>
      <div className={Billings}>
        <p>monthly billing</p>
        <label>
          <Switch
            onChange={handleChange}
            checked={check}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={"#a5f3eb"}
            offColor={"#eaeefb"}
          />
        </label>
        <p>yearly billing</p>
        <p className={Discount}>25% discount</p>
        <p className={DiscountMobile}>-25%</p>
      </div>
    </div>
  );
};

export default Pricing;
