import { useEffect, useState } from "react";

const useCounter = (value = 0, duration = 0) => {
  const [counter, setCounter] = useState(0);

  const FPS = 60;
  const interval = 1000 / FPS;
  const totalFrames = Math.max(1, Math.floor(duration / interval));
  const increment = value / totalFrames;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => {
        const next = prev + increment;

        if (next >= value) {
          clearInterval(intervalId);

          return value;
        }

        return next;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [value, increment, interval]);

  return Math.floor(counter);
};

export default useCounter;
