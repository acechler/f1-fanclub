import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';

const HomePage = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Hero/>
      
      </div>
    );
  }

  export default HomePage;