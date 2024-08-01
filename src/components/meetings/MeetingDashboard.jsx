import React, { useState, useEffect } from "react";
import MeetingComponent from "./MeetingComponent";
import axios from "axios";
import { OPENF1_MEETINGS_API } from "../../config.js";

const MeetingDashboard = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(OPENF1_MEETINGS_API)
      .then((response) => {
        console.log(response.data);
        setMeetings(response.data);
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
        {meetings.map((meet) => (
          <div key={meet.session_key}>
            <MeetingComponent
              country_name={meet.country_name}
              circuit_short_name={`${meet.circuit_short_name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingDashboard;
