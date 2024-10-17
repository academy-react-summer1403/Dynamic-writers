import React, { useEffect, useState } from "react";
import moment from "moment-jalaali";

const CurrentShamsiDate = () => {
  const [shamsiDate, setShamsiDate] = useState("");

  useEffect(() => {
    const currentDate = moment().locale('fa').format('jD jMMMM jYYYY');
    setShamsiDate(currentDate);
  }, []);

  return (
    <div>
      <p className="font-bold whitespace-nowrap"> {shamsiDate}</p>
    </div>
  );
};

export default CurrentShamsiDate;