import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MeetingComponent = ({ country_name, circuit_short_name }) => {
  const [countryFlagUrl, setCountryFlagUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryFlag = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country_name}`);
        const data = await response.json();
        if (data && data[0] && data[0].flags) {
          setCountryFlagUrl(data[0].flags.png);
        }
      } catch (error) {
        console.error('Error fetching country flag:', error);
        setError('Failed to load country flag');
      } finally {
        setLoading(false);
      }
    };

    fetchCountryFlag();
  }, [country_name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      className="transform transition xl:align-middle duration-300 hover:scale-105 rounded-lg shadow-lg w-56 hover:shadow-xl bg-white"
      role="listitem"
    >
      <div className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 p-4 rounded-t-lg">
        <img
          src={countryFlagUrl}
          alt={`Flag of ${country_name}`}
          className="object-cover rounded-full mx-auto"
          loading="lazy"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-center text-lg">{country_name}</h2>
        <h2 className="font-semibold text-center text-lg">{circuit_short_name}</h2>
        <button
          className="bg-blue-500 w-full cursor-pointer text-white px-4 py-2 mt-4 rounded-md transition duration-150 hover:bg-blue-700"
          type="button"
          aria-label={`View profile of ${country_name}`}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

MeetingComponent.propTypes = {
  country_name: PropTypes.string.isRequired,
  circuit_short_name: PropTypes.string.isRequired,
};

export default MeetingComponent;