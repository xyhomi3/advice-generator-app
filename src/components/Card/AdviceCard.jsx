import { useRef, useState } from "react";

import AdviceDisplay from "../Display/AdviceDisplay";
import DesktopDivider from "../../assets/images/pattern-divider-desktop.svg";
import IconDice from "../../assets/images/icon-dice.svg";
import MobileDivider from "../../assets/images/pattern-divider-mobile.svg";
import fetchAdvice from "../../services/api/api";

export default function AdviceCard() {
  const [currentAdvice, setCurrentAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(0);
  const previousAdvice = useRef("");

  const generateAdvice = async () => {
    try {
      const newAdvice = await fetchAdvice();
      if (newAdvice && newAdvice !== previousAdvice.current) {
        setCurrentAdvice(newAdvice);
        setAdviceNumber(adviceNumber + 1);
        previousAdvice.current = newAdvice;
      } else if (!newAdvice) {
        console.error("Received empty advice from the API.");
      }
    } catch (error) {
      console.error("Error fetching advice: ", error);
      setCurrentAdvice("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="advice-card">
        <h3 className="advice-number">Advice #{adviceNumber}</h3>
        <AdviceDisplay advice={currentAdvice} />
        <img
          src={DesktopDivider}
          alt="Desktop Divider"
          className="desktop-divider"
          loading="lazy"
        />
        <img
          src={MobileDivider}
          alt="Mobile Divider"
          className="mobile-divider"
          loading="lazy"
        />
        <button className="advice-button" onClick={generateAdvice}>
          <img src={IconDice} alt="Dice Icon" loading="lazy" />
        </button>
      </div>
    </>
  );
}
