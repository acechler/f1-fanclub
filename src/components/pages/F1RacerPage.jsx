import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DriverProfile from '../racers/DriverProfile';
import RacerDashboard from '../racers/RacerDashboard';

const F1RacerPage = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleDeselectDriver = () => {
    setSelectedDriver(null);
  };

  return (
    <div className='grid grid-cols-1'>
      <RacerDashboard onSelectDriver={setSelectedDriver} />
      {selectedDriver && <DriverProfile driver={selectedDriver} onDeselectDriver={handleDeselectDriver} />}
    </div>
  );
};

export default F1RacerPage;
