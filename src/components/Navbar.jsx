

// import logo from '../assets/logo.svg'
// import name from '../assets/name.svg'
// import DButton from './DButton'

// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between p-6 shadow-md  gap-4 md:gap-10">
//       <div className="flex items-center justify-start  ">
//         <img src={logo} alt="logo" className="h-16 md:h-24" />
//         <img src={name} alt="name" className="h-16 md:h-20" />
//       </div>
//       <div className="flex gap-2 md:gap-4 items-center">
//         <a href="#home" className="px-2 py-3 md:px-3 md:py-5 text-lg md:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-2 md:ml-[68.35px]">Home</a>
//         <a href="#about" className="px-2 py-3 md:px-3 md:py-5 text-lg md:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-2 md:ml-[68.35px]">About</a>
//         <a href="#contact" className="px-2 py-3 md:px-3 md:py-5 text-lg md:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-2 md:ml-[68.35px]">Contact</a>
//         <div className="ml-2 md:ml-[68.35px]">
//           <DButton />
//         </div>
//       </div>
//     </nav>
//   )
// }

// import { useState, useEffect } from 'react';
// import logo from '../assets/logo.svg'
// import name from '../assets/name.svg'
// import DButton from './DButton'

// export default function Navbar() {
//   const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 1100);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsScreenLarge(window.innerWidth >= 1100);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <nav className="flex items-center justify-between p-6 shadow-md gap-4 md:gap-10">
//       <div className="flex items-center justify-start">
//         <img src={logo} alt="logo" className={`h-16 md:h-24`} />
//         {isScreenLarge && <img src={name} alt="name" className="h-16 md:h-20" />}
//       </div>
//       <div className="flex gap-2 md:gap-4 items-center">
//         <a href="#home" className="px-2 py-3 md:px-3 md:py-5 text-lg md:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-2 md:ml-[68.35px]">Home</a>
//         <a href="#about" className="px-2 py-3 md:px-3 md:py-5 text-lg md:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-2 md:ml-[68.35px]">About</a>
//         <a href="#contact" className="px-2 py-3 md:px-3 md:py-5 text-lg md:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-2 md:ml-[68.35px]">Contact</a>
//         <div className="ml-2 md:ml-[68.35px]">
//           <DButton />
//         </div>
//       </div>
//     </nav>
//   )
// }
// import { useState, useEffect } from 'react';
// import logo from '../assets/logo.svg';
// import name from '../assets/name.svg';
// import DButton from './DButton';

// export default function Navbar() {
//   const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 1100);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsScreenLarge(window.innerWidth >= 1100);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <nav className="flex items-center justify-between p-4 md:p-6 shadow-md gap-2 md:gap-4 lg:gap-10">
//       <div className="flex items-center justify-start">
//         <img src={logo} alt="logo" className="h-12 md:h-16 lg:h-24" />
//         {isScreenLarge && <img src={name} alt="name" className="h-12 md:h-16 lg:h-20" />}
//       </div>
//       <div className="flex gap-2 md:gap-4 items-center">
//         <a href="#home" className="px-1 py-2 md:px-2 md:py-3 lg:px-3 lg:py-5 text-base md:text-lg lg:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-1 md:ml-2 lg:ml-[68.35px]">Home</a>
//         <a href="#about" className="px-1 py-2 md:px-2 md:py-3 lg:px-3 lg:py-5 text-base md:text-lg lg:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-1 md:ml-2 lg:ml-[68.35px]">About</a>
//         <a href="#contact" className="px-1 py-2 md:px-2 md:py-3 lg:px-3 lg:py-5 text-base md:text-lg lg:text-2xl font-semibold rounded hover:text-[#FF7E39] ml-1 md:ml-2 lg:ml-[68.35px]">Contact</a>
//         <div className="ml-1 md:ml-2 lg:ml-[68.35px]">
//           <DButton />
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.svg';
import name from '../assets/name.svg';
import DButton from './DButton';

export default function Navbar() {
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth >= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth >= 1100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>SmartSavaari | Your Daily Commute Partner</title>
        <meta name="description" content="SmartSavaari is your ultimate partner for daily commutes with real-time tracking, cashless ticketing, and seamless route planning." />
        <meta name="keywords" content="SmartSavaari, daily commute, real-time tracking, cashless ticketing, route planning" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <nav className="flex items-center justify-between p-4 md:p-6 shadow-md gap-2 md:gap-4 lg:gap-10">
        <div className="flex items-center">
          <img src={logo} alt="SmartSavaari Logo" className="h-12 md:h-16 lg:h-24" />
          {isScreenLarge && <img src={name} alt="SmartSavaari" className="h-12 md:h-16 lg:h-20 ml-2" />}
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#FF7E39] px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-base md:text-lg lg:text-xl font-semibold rounded" : "px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-base md:text-lg lg:text-xl font-semibold rounded hover:text-[#FF7E39] transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#FF7E39] px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-base md:text-lg lg:text-xl font-semibold rounded" : "px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-base md:text-lg lg:text-xl font-semibold rounded hover:text-[#FF7E39] transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#FF7E39] px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-base md:text-lg lg:text-xl font-semibold rounded" : "px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-base md:text-lg lg:text-xl font-semibold rounded hover:text-[#FF7E39] transition-colors"
            }
          >
            Contact
          </NavLink>
          <div className="ml-2">
            <DButton />
          </div>
        </div>
      </nav>
    </>
  );
}