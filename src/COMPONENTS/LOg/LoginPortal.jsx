// import React from "react";
// import { FaHospital, FaUserMd, FaUser } from "react-icons/fa";
// import Testing from "../../assets/IMAGES/Testing.png";

// export default function LoginPortal() {
//   const roles = [
//     {
//       title: "Hospital",
//       description:
//         "Access your account as a Hospital with your valid credentials",
//       icon: <FaHospital className="text-3xl text-blue-600" />,
//     },
//     {
//       title: "Health Specialist",
//       description:
//         "Access your account as a doctor with your valid credentials",
//       icon: <FaUserMd className="text-3xl text-green-600" />,
//     },
//     {
//       title: "Patients",
//       description:
//         "Access your account as a Patient with your valid credentials",
//       icon: <FaUser className="text-3xl text-purple-600" />,
//     },
//   ];

//   return (
//     <div className="flex h-screen w-full">
//       {/* Left Image Section */}
//       <div className="w-1/2 hidden lg:block relative">
//         <img
//           src={Testing}
//           alt="Hospital scene"
//           className="h-full w-full object-cover"
//         />
//         {/* Overlay dots */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//           <span className="w-2 h-2 rounded-full bg-white"></span>
//           <span className="w-2 h-2 rounded-full bg-gray-300"></span>
//           <span className="w-2 h-2 rounded-full bg-gray-300"></span>
//         </div>
//       </div>

//       {/* Right Login Section */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 md:px-16 relative">
//         <div className="max-w-md w-full">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//             Sign Up/Login in to your account as
//           </h2>
//           <p className="text-sm text-gray-500 mb-8">
//             click on your roles below to access your account
//           </p>

//           <div className="space-y-6">
//             {roles.map((role, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center justify-between p-5 border rounded-2xl shadow-sm cursor-pointer 
//                 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-gray-100 rounded-full transition-transform duration-300 hover:rotate-6">
//                     {role.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-gray-800">
//                       {role.title}
//                     </h3>
//                     <p className="text-sm text-gray-500">{role.description}</p>
//                   </div>
//                 </div>
//                 <button
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 
//                   hover:bg-blue-600 hover:text-white transition-colors duration-300"
//                 >
//                   ➜
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { FaHospital, FaUserMd, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import Testing from "../../assets/IMAGES/Testing.png";

export default function LoginPortal() {
  const navigate = useNavigate(); // ✅ navigation instance

  const roles = [
    {
      title: "Hospital",
      description:
        "Access your account as a Hospital with your valid credentials",
      icon: <FaHospital className="text-3xl text-blue-600" />,
      path: "/hospital-signup", // ✅ hospital signup page
    },
    {
      title: "Health Specialist",
      description:
        "Access your account as a doctor with your valid credentials",
      icon: <FaUserMd className="text-3xl text-green-600" />,
      path: "/specialist-signup", // ✅ specialist signup page
    },
    {
      title: "Patients",
      description:
        "Access your account as a Patient with your valid credentials",
      icon: <FaUser className="text-3xl text-purple-600" />,
      path: "/patient-signup", // ✅ patient signup page
    },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Left Image Section */}
      <div className="w-1/2 hidden lg:block relative">
        <img
          src={Testing}
          alt="Hospital scene"
          className="h-full w-full object-cover"
        />
        {/* Overlay dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      {/* Right Login Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 md:px-16 relative">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Sign Up/Login in to your account as
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Click on your roles below to access your account
          </p>

          <div className="space-y-6">
            {roles.map((role, idx) => (
              <div
                key={idx}
                onClick={() => navigate(role.path)} // ✅ navigate when clicked
                className="flex items-center justify-between p-5 border rounded-2xl shadow-sm cursor-pointer 
                transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-full transition-transform duration-300 hover:rotate-6">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {role.title}
                    </h3>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 
                  hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  ➜
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
