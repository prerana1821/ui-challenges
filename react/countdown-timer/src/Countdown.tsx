import { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [minInput, setMinInput] = useState("0");
  const [timer, setTimer] = useState("00:00:00");
  const [startTimer, setStartTimer] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const displayTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    let setMin;
    if (minInput.length === 0) {
      setMin = "00";
    } else if (minInput.length === 1) {
      setMin = `0${minInput}`;
    } else {
      setMin = minInput;
    }

    setTimer(`00:${setMin}:00`);
    clearInterval(intervalRef.current!);
    setStartTimer(false);
  }, [minInput]);

  useEffect(() => {
    if (startTimer) {
      intervalRef.current = setInterval(() => {
        if (!pauseTimer) {
          setTimer((prevTimer) => {
            const timeParts = prevTimer.split(":");
            let totalSeconds =
              parseInt(timeParts[0]) * 3600 +
              parseInt(timeParts[1]) * 60 +
              parseInt(timeParts[2]);
            if (totalSeconds > 0) {
              totalSeconds--;
              return displayTimer(totalSeconds);
            } else {
              clearInterval(intervalRef.current!);
              setStartTimer(false);
              return "00:00:00";
            }
          });
        }
      }, 1000);
    }

    return () => clearInterval(intervalRef.current!);
  }, [startTimer, pauseTimer]);

  return (
    <div>
      <label>Enter Minutes</label>
      <br />
      <input
        type='text'
        value={minInput}
        onChange={(e) => setMinInput(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setStartTimer(true)} disabled={startTimer}>
        Play
      </button>
      <button
        onClick={() => {
          setMinInput("0");
          setTimer("00:00:00");
          setStartTimer(false);
          clearInterval(intervalRef.current!);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setPauseTimer(!pauseTimer);
        }}
      >
        {pauseTimer ? "Begin" : `Pause`}
      </button>
      <p className='bold'>{timer}</p>
    </div>
  );
};

export default Countdown;
