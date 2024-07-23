
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DriverProfile from '../DriverProfile';
import RacerDashboard from '../RacerDashboard';


const F1RacerPage = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <div className='grid grid-cols-2'>
      <RacerDashboard onSelectDriver={setSelectedDriver} />
      {selectedDriver && <DriverProfile driver={selectedDriver} />}
    </div>
  );
};

export default F1RacerPage;