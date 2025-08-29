// import React from "react";
// import { Link } from "react-router-dom";
// import Hello from "../assets/IMAGES/Hello.jpg";
// import Logo from '../assets//IMAGES/logo.png'
// const Nav = () => {
//   return (
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <img
//         src={Hello}
//         alt="Background"
//         className="absolute inset-0 w-full h-full object-cover "
//       />

//       {/* Overlay for readability */}
//       <div className="absolute inset-0  bg-opacity-40"></div>

//       {/* Navbar */}
//       <nav className="relative z-10 flex justify-between items-center px-6 md:px-16 py-4 bg-transparent">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src={Logo} // replace with your logo
//             alt="Med Vault Logo"
//             className="w-12 h-12 mr-2"
//           />
         
//         </div>

//         {/* Links */}
//         <ul className="hidden md:flex space-x-8 text-white font-medium">
//           <li className="text-[#141163]">
//             <a href="#home" className="hover:text-blue-400 transition">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-blue-400 transition">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#services" className="hover:text-blue-400 transition">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-blue-400 transition">
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Register Button */}
//         <Link
//          to='/login'>
        
//         <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition">
//           Register
//         </button>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white text-2xl">&#9776;</button>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
//         <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//           Transforming Healthcare Through Innovation <br /> And Compassion
//         </h1>
//         <p className="text-gray-200 mt-4 max-w-2xl">
//           Our centralized hospital management system connects hospitals and
//           caregivers on one seamless platform.
//         </p>
//         <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Nav;
import React from "react";
import { Link } from "react-router-dom";
import Hello from "../assets/IMAGES/Hello.jpg";
import Logo from "../assets/IMAGES/logo.png";

const Nav = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={Hello}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-16 py-4 bg-transparent">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Med Vault Logo"
            className="w-[81.918px] h-[65px] object-contain"
          />
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="text-[#141163]">
            <a
              href="#home"
              className="hover:text-blue-400 transition text-center font-inter text-[16px] not-italic font-medium leading-5"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Register Button (Navbar) */}
        <Link to="/login">
          <button className="hidden md:flex w-[185px] px-4 py-[14px] justify-center items-center gap-2 rounded-lg bg-[#231EAF] text-white font-medium shadow-md transition hover:bg-[#1b1790]">
            Register
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">&#9776;</button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFF] leading-tight">
          Transforming Healthcare Through Innovation <br /> And Compassion
        </h1>
        <p className="text-gray-200 mt-4 max-w-2xl">
          Our centralized hospital management system connects hospitals and
          caregivers on one seamless platform.
        </p>

        {/* Register Button (Hero) */}
        <button className="mt-6 flex w-[185px] px-4 py-[14px] justify-center items-center gap-2 rounded-lg bg-[#231EAF] text-white font-medium shadow-md transition hover:bg-[#1b1790]">
          Register
        </button>
      </div>
    </div>
  );
};

export default Nav;
