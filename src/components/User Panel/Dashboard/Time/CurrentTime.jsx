import React, { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(intervalId);

  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="font-bold whitespace-nowrap">
      {hours}:{minutes}
    </div>
  );
}

export default CurrentTime;