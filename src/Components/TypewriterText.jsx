import React, { useState, useEffect } from "react";

const TypewriterApp = () => {
  const sentences = [
    "I'm going to a party, what should I wear?",
    "What should I buy for this Diwali season?",
    "Any suggestions for a casual weekend outfit?",
    "Help me find the perfect dress for my friends birthday.",
  ];
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

  return (
    <div className="flex justify-center items-center h-40 w-screen bg-white  boder-1-black">
      <div className="w-1/2 bg-white-800 rounded-lg p-8 text-center text-black">
        <p className="text-gray-400 font-medium md:max-w-lg text-center mx-auto mt-3 text-lg text-cyan-600 ">
          What you can ask from me
        </p>
        <div className="text-black font-mono text-lg mt-6">{currentText}</div>
      </div>
    </div>
  );
};

export default TypewriterApp;
