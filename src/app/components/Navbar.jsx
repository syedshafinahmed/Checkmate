"use client";

import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
      <Link href="/players" onClick={() => setIsOpen(false)}>Players</Link>
      <Link href="/openings" onClick={() => setIsOpen(false)}>Openings</Link>
      <Link href="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
    </>
  );

  return (
    <div
      className={`
        w-full fixed top-0 z-50 py-3 transition-all duration-300
        ${scrolled ? "bg-base-100/10 backdrop-blur-xl shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-0">
        <Logo />

        <div className="hidden md:flex gap-5 text-orange-300 font-bold">
          {links}
        </div>

        <button className="btn text-base-100 shadow-none btn-sm text-xs border-none bg-orange-300 rounded">
          Login
        </button>

        <button
          className="md:hidden ml-2 text-orange-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 mt-2 text-orange-300 font-bold transition-all">
          {links}
        </div>
      )}
    </div>
  );
};

export default Navbar;



// "use client";

// import React, { useState, useEffect } from "react";
// import Logo from "../Logo/Logo";
// import Link from "next/link";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); 
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = (
//     <>
//       <Link href="/">Home</Link>
//       <Link href="/players">Players</Link>
//       <Link href="/openings">Openings</Link>
//       <Link href="/courses">Courses</Link>
//     </>
//   );

//   return (
//     <div
//       className={`
//         w-full fixed top-0 z-50 py-3 transition-all duration-300
//         ${scrolled ? "bg-base-100/10 backdrop-blur-xl shadow-md" : "bg-transparent"}
//       `}
//     >
//       <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-0">
//         <Logo />
//         <div className="hidden md:flex gap-5 text-orange-300 font-bold">
//           {links}
//         </div>

//         <button className="btn text-base-100 shadow-none btn-sm text-xs border-none bg-orange-300 rounded">
//           Login
//         </button>
//       </div>
//       <div className="md:hidden flex flex-col gap-3 px-6 mt-2 text-orange-300 font-bold">
//         {links}
//       </div>
//     </div>
//   );
// };

// export default Navbar;