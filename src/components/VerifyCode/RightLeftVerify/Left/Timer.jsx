import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(140)

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div>
            <div style={{ fontSize: '0.75em', color: 'blue', backgroundColor: 'light-blue',

               }}>
                {formatTime(timeLeft)}
            </div>
            {timeLeft <= 0 && <div> </div>}
        </div>
    );
};

export default Timer;
