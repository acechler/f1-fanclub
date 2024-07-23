import React, { useState, useEffect } from "react";
import RacerComponent from "./RacerComponent";

const RacerDashboard = ({ onSelectDriver }) => {
  const [racers, setRacers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.openf1.org/v1/drivers?session_key=latest")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRacers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelectDriver = (racer) => {
    onSelectDriver(racer);
  };

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {racers.map((racer) => (
        <div key={racer.driverId} onClick={() => handleSelectDriver(racer)}>
          <RacerComponent
            headshot_url={racer.headshot_url}
            full_name={racer.full_name}
            driver_number={racer.driver_number}
          />
        </div>
      ))}
    </div>
  );
};

export default RacerDashboard;