import { useState, useEffect } from 'react';
import './Clock.css'; // Import CSS file for styling

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock-container">
      <div id="clock" className="clock">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default Clock;
