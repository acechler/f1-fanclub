import React from "react";
import ScheduleComponent from "../ScheduleComponent";
const NewsPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <header className="bg-blue-800 w-full py-6 mb-10">
          <h1 className="text-3xl text-white text-center">F1 Schedule</h1>
        </header>
        <ScheduleComponent />
      </div>
    </div>
  );
};

export default NewsPage;
