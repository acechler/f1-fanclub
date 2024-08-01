import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MeetingDashboard from '../meetings/MeetingDashboard';

const NewsPage = () => {
  return (
    <div className='grid grid-cols-1'>
      <MeetingDashboard />
    </div>
  );
};

export default NewsPage;
