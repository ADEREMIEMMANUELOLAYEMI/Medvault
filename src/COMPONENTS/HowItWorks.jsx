// src/pages/HowItWorks.jsx
import React from "react";
import { Icon } from "@iconify/react"; // for icons
import Receiptionist from "../assets/IMAGES/Receiptionist.png"; // replace with your image

const steps = [
  {
    icon: "mdi:login",
    title: "Register or login",
    desc: "Access the hospital management system through the web or mobile app.",
  },
  {
    icon: "mdi:account-key-outline",
    title: "Enter Your Credentials",
    desc: "Provide your Email / Staff ID / Patient ID and Password in the login form.",
  },
  {
    icon: "mdi:account-check-outline",
    title: "Role Verification",
    desc: "The system detects your role (Patient, Doctor, Nurse, Lab, Admin) and grants the right access.",
  },
  {
    icon: "mdi:credit-card-outline",
    title: "Subscription",
    desc: "Pay a subscription fee to access our software services.",
  },
  {
    icon: "mdi:view-dashboard-outline",
    title: "Dashboard Access",
    desc: "You are redirected to your personalized dashboard with the tools and information you need.",
  },
];

const HowItWorks = () => {
  return (
    <main className="bg-white px-6 md:px-20 lg:px-32 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <Icon icon={step.icon} className="text-indigo-600 text-xl" />
              </div>
              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={Receiptionist}
            alt="How it works"
            className="rounded-lg shadow-md max-w-full"
          />
        </div>
      </div>
    </main>
  );
};

export default HowItWorks;































// import { Icon } from "@iconify/react";
// import { motion } from "framer-motion";
// import Doctor from "../assets/IMAGES/doctors.png";
// import Patient from "../assets/IMAGES/patient.png";
// // import Circle from '../assets/IMAGES/Circle.png'
// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: (
//         <Icon
//           icon='eos-icons:system-re-registered'
//           className=' text-[#100C8D] bg-[#1B36A733] rounded-[48px] p-[10px] w-[48px] h-[48px]'
//         />
//       ),
//       title: "Register or login",
//       description:
//         "Access the hospital management system through the web or mobile app.",
//     },
//     {
//       icon: (
//         <Icon icon='mdi:password-outline' className=' text-[#100C8D] bg-[#1B36A733] rounded-[48px] p-[10px] w-[48px] h-[48px]' />
//       ),
//       title: "Enter Your Credentials",
//       description:
//         "Provide your Email / Staff ID / Patient ID and Password in the login form.",
//     },
//     {
//       icon: <Icon icon='uiw:verification' className=' text-[#100C8D] bg-[#1B36A733] rounded-[48px] p-[10px] w-[48px] h-[48px]' />,
//       title: "Role Verification",
//       description:
//         "The system detects your role (Patient, Doctor, Nurse, Lab, Admin) and grants the right access.",
//     },
//     {
//       icon: (
//         <Icon icon='ri:secure-payment-fill' className=' text-[#100C8D] bg-[#1B36A733] rounded-[48px] p-[10px] w-[48px] h-[48px]' />
//       ),
//       title: "Subscription",
//       description: "Pay a subscription fee to access our software services.",
//     },
//     {
//       icon: (
//         <Icon icon='bx:universal-access' className=' text-[#100C8D] bg-[#1B36A733] rounded-[48px] p-[10px] w-[48px] h-[48px]' />
//       ),
//       title: "Dashboard Access",
//       description:
//         "You are redirected to your personalized dashboard with the tools and information you need.",
//     },
    
   
//   ];

//   return (
//     <section className='relative py-16 px-6 lg:px-20 bg-white'>
//       {/* Section Header */}
//       <div className='text-center '>
        
//         <button className='bg-gradient-to-r from-[#1B36A7CC] to-[#041E49BF] rounded-[30px]  h-[42px]  gap-[8px] pt-[15px] pr-[32px] pb-[15px] pl-[32px] w-[168px] self-center mb-5 text-[#FFFFFF] font-[Inter]'>
//           Step by step
//         </button>
//         <h2 className='  font-semibold  text-[#212121] font-[Inter] text-[40px] leading-[100%] mb-10'>
//           How it works
//         </h2>
//       </div>

//       <div className='grid lg:grid-cols-2 gap-12 items-center mt-20'>
        
//         {/* Left side images */}
//         <div className='relative flex flex-col p-'>
         
//           <motion.img
//             src={Patient}
//             alt='Doctor consulting patient'
//             className='rounded-[5.12px] shadow-lg '
//             whileHover={{ scale: 1.05 }}
//           />
//           <motion.img
//             src={Doctor}
//             alt='Doctor working'
//             className='rounded-[8.4px] shadow-md  border-[#FFFFFF] w-[263.16229248046875] absolute bottom-0 left-0 translate-x-[-30%] translate-y-[30%]'
//             whileHover={{ scale: 1.05 }}
//           />
//         </div>
       
//         {/* Right side steps */}
//         <ul className='space-y-6'>
//           <div className="flex flex-col items-center text-[#3F51B5] font-Inter text-[32px] leading-[100%] w-[90px] h-[39px] font-semibold"> <h1>Steps</h1></div>
//           {steps.map((step, index) => (
//             <li key={index} className='flex gap-4 items-start'>
//               {step.icon}
              
//               <div>
//                 <h3 className='font-semibold text-lg mb-1'>{step.title}</h3>
//                 <p className='text-gray-600 text-sm leading-relaxed'>
//                   {step.description}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }
