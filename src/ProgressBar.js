import React, { useState, useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const startDownload = () => {
    setProgress(0);
    const id = setInterval(() => {
      if (!isPaused) {
        setProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 1 : 100
        );
      }
    }, 100);
    setIntervalId(id);
  };
  const pauseDownload = () => {
    setPaused(true);
    clearInterval(intervalId);
  };
  const resetDownload = () => {
    setProgress(0);
    setPaused(false);
    clearInterval(intervalId);
  };
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);
  return (
    <div className="main" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Downloading Progress Bar</h2>
      <div
        style={{
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          overflow: "hidden",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "30px",
            backgroundColor:
              progress === 100
                ? "rgba(191, 123, 255, 0.781)"
                : "rgb(217, 176, 255)",
            color: "black",
            textAlign: "center",
            lineHeight: "30px",
          }}
        >
          {progress === 100 ? "Complete" : `${progress}%`}
        </div>
      </div>
      <div className="wrapeer">
        <button onClick={startDownload} style={{ marginRight: "10px" }}>
          Start Download
        </button>
        <button onClick={resetDownload} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default ProgressBar;
