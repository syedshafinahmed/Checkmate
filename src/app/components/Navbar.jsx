import React from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';

const Navbar = () => {
  const links =
    <>
      <Link href="/">Home</Link>
      <Link href="/players">Players</Link>
      <Link href="/openings">Openings</Link>
      <Link href="/courses">Courses</Link>
    </>
  return (
    <div className='w-full fixed top-0 z-50 bg-backdrop-blur-xl bg-base-100/10 py-3'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <div className='flex gap-5 text-orange-300 font-bold'>
          {links}
        </div>
        <button className='btn text-base-100 font-bold border-none bg-orange-300 rounded-full'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;