import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-center'>
      <img src="/favicon.png" alt="Checkmate Logo" className='w-10 h-10'/>
      <h1 className="text-3xl font-black text-orange-300">
        Checkmate
      </h1>
    </div>
  );
};

export default Logo;