import React from 'react';


import PropTypes from 'prop-types';

const DriverProfile = ({ driver }) => {
    return (
        <div>
            <h2>{driver.full_name}</h2>
            <img src={driver.headshot_url} alt={`Headshot of ${driver.full_name}`} />
            <p>Driver Number: {driver.driver_number}</p>
            {/* Add more driver details as needed */}
        </div>
    );
};

DriverProfile.propTypes = {
    driver: PropTypes.shape({
        full_name: PropTypes.string.isRequired,
        headshot_url: PropTypes.string.isRequired,
        driver_number: PropTypes.number.isRequired,
        // Add more prop types for other driver details
    }).isRequired,
};

export default DriverProfile;

