/* eslint-disable react/prop-types */
import React from "react";

const RacerComponent = ({ headshot_url, full_name, driver_number }) => {
  return (
    <div className="transform transition xl:align-middle duration-300 hover:scale-105 rounded-lg shadow-lg w-56 hover:shadow-xl bg-white">
      <div className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-400 p-4 rounded-t-lg">
        <img
          src={headshot_url}
          alt={full_name}
          className="object-cover rounded-full mx-auto"
          loading="lazy" // Add lazy loading for better performance
          style={{ maxWidth: "100%", height: "auto" }} // Ensure the image maintains its aspect ratio
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-center text-lg">{full_name}</h2>
        <h2 className="font-semibold text-center text-lg">{driver_number}</h2>
        <button
          className="bg-blue-500 w-full cursor-pointer text-white px-4 py-2 mt-4 rounded-md transition duration-150 hover:bg-blue-700"
          type="button"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default RacerComponent;
