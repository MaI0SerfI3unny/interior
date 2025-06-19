import { useEffect, useState } from "react";
import style from "./style.module.scss";

export const BannerHeading = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  const renderStyledText = () => {
    return displayedText.split("").map((char, i) =>
      char === "—" ? (
        <span key={i} className={style.dash}>
          {char}
        </span>
      ) : (
        <span key={i}>{char}</span>
      )
    );
  };

  const isFinished = index >= text.length;

  return (
    <h1 className={style.heading}>
      {renderStyledText()}
      {!isFinished && <span className={style.cursor}>|</span>}
    </h1>
  );
};
