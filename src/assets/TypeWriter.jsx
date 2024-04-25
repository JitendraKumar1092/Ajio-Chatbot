import React, { useState, useEffect } from "react";

const TypeWriter = ({ sentences }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const text = sentences[currentIndex];
      setCurrentText(text.substring(0, currentText.length + 1));

      if (currentText === text) {
        clearInterval(interval);
        setTimeout(() => {
          if (currentIndex + 1 < sentences.length) {
            setCurrentIndex(currentIndex + 1);
            setCurrentText("");
          }
        }, 1000); // Change delay before displaying the next sentence (in milliseconds)
      }
    }, 100); // Change typing speed (in milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex, currentText, sentences]);

  return <div className="text-white font-mono text-lg">{currentText}</div>;
};

const TypewriterApp = () => {
  const sentences = [
    "First sentence.",
    "Second sentence.",
    "Third sentence.",
    "Fourth sentence.",
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <TypewriterText sentences={sentences} />
    </div>
  );
};

export default TypeWriter;
