// src/Schedule.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OPENFI_MEETINGS_API } from "../config";
const ScheduleComponent = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(OPENFI_MEETINGS_API);
        setSchedule(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Schedule</h1>
      {schedule.length > 0 ? (
        <ul className="space-y-4">
          {schedule.map((event) => (
            <li key={event.meeting_key} className="p-4 border rounded-md shadow-sm">
              <h2 className="text-xl font-semibold">{event.meeting_name}</h2>
              <p><span className="font-bold">Location:</span> {event.location}</p>
              <p><span className="font-bold">Date:</span> {new Date(event.date_start).toLocaleString()}</p>
              <p><span className="font-bold">Country:</span> {event.country_name}</p>
              <p><span className="font-bold">Circuit:</span> {event.circuit_short_name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No events found.</p>
      )}
    </div>
  );
};

export default ScheduleComponent;
