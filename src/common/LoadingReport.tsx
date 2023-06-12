import React, { useState, useEffect } from "react";

const LoadingReport: React.FC = () => {
  const sentences = [
    "Loading...",
    "Retrieving your data...",
    "Formatting your report...",
    "Almost there...",
    "Just a few more seconds...",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex % sentences.length;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      data-testid="loading"
      className="m-auto flex w-[50%] flex-col items-center justify-center gap-6 p-16"
    >
      <div className="loading loading-ring loading-lg"></div>
      <div>{sentences[index]}</div>
    </div>
  );
};

export default LoadingReport;
