import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SessionsDashboard from '../sessions/SessionsDashboard';

const NewsPage = () => {
  return (
    <div className='grid grid-cols-1'>
      <SessionsDashboard />
    </div>
  );
};

export default NewsPage;
