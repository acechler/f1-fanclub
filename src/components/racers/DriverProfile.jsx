// DriverProfile.jsx

import React from "react";
import PropTypes from "prop-types";
import RacerMap from "../Utilities/RacerMap";

const DriverProfile = ({ driver, onDeselectDriver }) => {
  const racerMap = new RacerMap();
  const headshotUrl = racerMap.getImageSrc(driver.last_name);
  const racerBio = racerMap.getRacerBio(driver.last_name);

  return (
    <div className="flow-root p-4 mt-5 rounded-lg">
      <img
        src={headshotUrl}
        alt={`Headshot of ${driver.full_name}`}
        className="object-cover rounded-full mx-auto"
        loading="lazy"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <dl className="-my-3 mt-20 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <dd className="text-gray-700 sm:col-span-2">{driver.full_name}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Team</dt>
          <dd className="text-gray-700 sm:col-span-2">{driver.team_name}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Number</dt>
          <dd className="text-gray-700 sm:col-span-2">{driver.driver_number}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Bio</dt>
          <dd className="text-gray-700 sm:col-span-2">{racerBio}</dd>
        </div>
      </dl>
      <button 
        onClick={onDeselectDriver} 
        aria-label="Select another racer" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Select Another Racer
      </button>
    </div>
  );
};

DriverProfile.propTypes = {
  driver: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    driver_number: PropTypes.number.isRequired,
    team_name: PropTypes.string.isRequired,
    headshot_url: PropTypes.string,
    team_colour: PropTypes.string,
  }).isRequired,
  onDeselectDriver: PropTypes.func.isRequired,
};

export default DriverProfile;
