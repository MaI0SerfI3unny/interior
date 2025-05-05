import { useEffect, useState } from "react";
import style from "./style.module.scss";


export const BannerHeading = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

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

  return (
    <h1 className={style.heading}>
      {renderStyledText()}
      <span className={style.cursor}>|</span>
    </h1>
  );
};
