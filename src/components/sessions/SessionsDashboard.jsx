import React, { useState, useEffect } from "react";
import SessionsComponent from "./SessionsComponent.jsx";
import axios from "axios";
import { OPENF1_MEETINGS_API } from "../../config.js";

const SessionsDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(OPENF1_MEETINGS_API)
      .then((response) => {
        console.log(response.data);
        setSessions(response.data);
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

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {sessions.map((session) => (
          <div key={session.session_key}>
            <SessionsComponent
              country_name={session.country_name}
              circuit_short_name={`${session.circuit_short_name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionsDashboard;
