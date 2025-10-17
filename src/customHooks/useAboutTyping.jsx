import { useState, useEffect } from "react";

export const useAboutTypingEffect = (
  textArray,
  typingSpeed = 100,
  pauseDuration = 1000
) => {
  const [displayedText, setDisplayedText] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeCharacter = () => {
      if (charIndex < textArray[lineIndex].length) {
        setDisplayedText((prev) => {
          const newLines = [...prev];
          newLines[lineIndex] =
            (newLines[lineIndex] || "") + textArray[lineIndex][charIndex];
          return newLines;
        });
        setCharIndex((prev) => prev + 1);
      } else if (lineIndex < textArray.length - 1) {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
        setDisplayedText((prev) => [...prev, ""]);
      }
    };

    const typingInterval = setInterval(typeCharacter, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [charIndex, lineIndex, textArray, typingSpeed]);

  return displayedText;
};
