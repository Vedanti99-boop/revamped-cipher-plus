import React from 'react';
import Navbar from './Navbar';
import Quote from './Quote';
import TrendingRewards from './TrendingRewards';

const Home = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar className="h-1/10" />
      <Quote className="h-2/10 overflow-auto" />
      <TrendingRewards className="h-2/10 overflow-auto" />
    </div>
    
  );
};

export default Home;
