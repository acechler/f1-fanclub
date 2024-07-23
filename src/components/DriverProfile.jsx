import React, { useState } from "react";

import PropTypes from "prop-types";

const DriverProfile = ({ driver }) => {

 
  

  return (
    <div className="flow-root">


        <img
          src={driver.headshot_url}
          alt={driver.full_name}
          className="object-cover rounded-full mx-auto"
          loading="lazy" // Add lazy loading for better performance
          style={{ maxWidth: "100%", height: "auto" }} // Ensure the image maintains its aspect ratio
        />

      <dl className="-my-3 divide-y divide-gray-100 text-sm">


        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <dd className="text-gray-700 sm:col-span-2">{driver.full_name}</dd>
        </div>


        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Team </dt>
          <dd className="text-gray-700 sm:col-span-2">{driver.team_name}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Number </dt>
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
    </div>
  );
};

DriverProfile.propTypes = {
  driver: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    driver_number: PropTypes.number.isRequired,
    team_name : PropTypes.string.IsRequired,
    headshot_url : PropTypes.string,
    // Add more prop types for other driver details
  }).isRequired,
};

export default DriverProfile;
