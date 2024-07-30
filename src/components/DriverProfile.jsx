import React from "react";
import PropTypes from "prop-types";
import RacerMap from "../components/Utilities/RacerMap";


const DriverProfile = ({ driver, onDeselectDriver }) => {
  const racerMap = new RacerMap();
  const imgUrl = racerMap.getImageSrc(driver.last_name);


  return (
    <div className="flow-root">
      <img
        src={imgUrl}
        alt={`Headshot of ${driver.full_name}`}
        className="object-cover rounded-full mx-auto my-10"
        loading="lazy"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
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
          <dd className="text-gray-700 sm:col-span-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
            debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
            quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
            aliquam soluta architecto?
          </dd>
        </div>
      </dl>
      <button className="mt-10" onClick={onDeselectDriver} aria-label="Select another racer">Select Another Racer</button>
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
  }).isRequired,
  onDeselectDriver: PropTypes.func.isRequired,
};

export default DriverProfile;
