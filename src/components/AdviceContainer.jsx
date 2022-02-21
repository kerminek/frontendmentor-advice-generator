import React, { useEffect, useState } from "react";
import "./adviceContainer.css";
import axios from "axios";
import DividerDesktop from "../images/pattern-divider-desktop.svg";
import DividerMobile from "../images/pattern-divider-mobile.svg";
import DiceIcon from "../images/icon-dice.svg";

export const AdviceContainer = () => {
  const [quote, setQuote] = useState(null);

  const queryQuote = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setQuote(res.data.slip);
  };

  useEffect(() => {
    queryQuote();
  }, []);

  return (
    <div className="container">
      <h3>ADVICE #{quote?.id}</h3>
      <p>"{quote?.advice}"</p>
      <img src={DividerDesktop} className="dividerIcon desktop" />
      <img src={DividerMobile} className="dividerIcon mobile" />
      <div className="diceContainer" onClick={queryQuote}>
        <img src={DiceIcon} className="diceIcon" />
      </div>
    </div>
  );
};
