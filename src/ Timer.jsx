import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>Прошло секунд:{seconds}</h2>
      <button onClick={() => setIsRunning(true)}>START</button>
      <button onClick={() => setIsRunning(false)}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default Timer;
