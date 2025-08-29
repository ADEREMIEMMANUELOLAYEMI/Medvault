import { Icon } from "@iconify/react";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import image from '../src/assets/IMAGES/image.png'
import Rectangles from '../src/assets/IMAGES/Rectangles.png'
import hostp from '../src/assets/IMAGES/hostp.png'

const FirstLayout = () => {
  return (
    <main>
      <section className='flex px-3 shadow-[1px_1px_8px]/30'>
        <div className='flex-4'>
          <img src={image} alt='Medivault' className=' w-[88.22px] h-[70.13px] ml-2 mt-5' />
        </div>
        <section className='flex-1 flex justify-between '>

          <div className='relative flex items-center gap-10 mr-20 '>
            <Icon icon={"ep:search"} className='absolute top-10 w-[19.48px] h-[19.48px] text-[#A49F9F] ml-[10px]' />
            <input
              type='search'
              placeholder='Search for patients ID and more'
              className='w-[358px] h-[48px]  rounded-[8px] bg-[#F7F6F9] placeholder:px-[40px] text-[#A49F9F] text-[14px]  text-w-[29px] text-h-[18px]  font-[Readex_Pro,] font-normal'
            />
            <Icon icon={"ph:bell-light"} className='w-[24px] h-[24px]' />
          </div>
          <div>

            <div className="text-[#2C2C2C] text-[16px] ">
              <div className="w-[71px] h-[20px]"><h1 className="text-[#2C2C2C]  text-[16px] leading-normal font-semibold font-readex">JUTH</h1></div> 

              <button className="bg-gradient-to-b from-[#FFFFFF] to-[#CFE2FF] w-[71px] h-[26px] rounded-[8px] border border-[#61CCD0] text-[#095194] pt-[4px] pb-[4px] pl-[8px] pr-[8px] ">Hospital</button>
            </div>
            <img src={hostp} alt='hospital' />
          </div>
          
        </section>
      </section>

{/* { dashboard section } */}
      <section className='flex leading-20 '>
        
        <section className=' p-5'>
         <div className="ml-[2px]">
           <h1 className="flex flex-row text-[#717074] text-[14px] leading-[100%] font-Readex-pro w-[275px] h-[18px] mt-10 ">Hospital Panel</h1>
           </div>

          <nav aria-label='Sidebar Navigation  ' >
            <ul className='space-y-10  p-2'>
              <li className="">
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#84828A] font-semibold flex items-center bg-[#EFE9FF] w-[275px] h-[56px] rounded-[8px]"
                      : "flex items-center"
                  }
                >
                  <Icon icon={'material-symbols:dashboard-outline'} className='mr-2 text-[#2C26DB] ' /> 
                  <span className="text-[#2C26DB] w-[201px] h-[20px] text-[16px] leading-normal font-Readex">Dashboard</span>
                </NavLink>
              </li>

              {/* ✅ Department Management updated */}
              <li className="mt-10">
                <NavLink
                  to='/department'
                  className={({ isActive }) =>
                    `flex items-center ${
                      isActive ? "bg-[#EFE9FF] w-[275px] h-[56px] rounded-[8px]" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        icon={'tabler:stack-filled'}
                        className={`mr-2 w-[24px] h-[21.6px] ${isActive ? "text-[#2C26DB]" : "text-[#808080]"}`}
                      />
                      <span
                        className={
                          isActive
                            ? "text-[#2C26DB] w-[201px] h-[20px] text-[16px] leading-normal font-Readex"
                            : "text-[#84828A] w-[201px] h-[20px] text-[16px] leading-[100%] font-normal font-readex"
                        }
                      >
                        Department Management
                      </span>
                    </>
                  )}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/staff'
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold flex items-center"
                      : "flex items-center"
                  }
                >
                  <Icon icon={'zondicons:user-group'} className='mr-2 text-[#808080] w-[24px] h-[21.6px]' /> 
                  <span className="text-[#84828A] w-[201px] h-[20px] text-[16px] leading-[100%] font-normal font-readex">Staff Management</span>
                </NavLink>
              </li>

               <li>
                <NavLink
                  to='/patience'
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold flex items-center"
                      : "flex items-center"
                  }
                >
                  <Icon icon='zondicons:currency-dollar' className='mr-2 text-[#808080] w-[24px] h-[21.6px]' />
                  <span className="text-[#84828A] w-[201px] h-[20px] text-[16px] leading-[100%] font-normal font-readex"> Patient Management </span> 
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/appointments'
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold flex items-center"
                      : "flex items-center"
                  }
                >
                  <Icon icon='streamline-plump:customer-support-7-solid' className='mr-2 text-[#808080] w-[24px] h-[21.6px]' /> 
                  <span className="text-[#84828A] w-[201px] h-[20px] text-[16px] leading-[100%] font-normal font-[Readepro]">Appointments</span>
                </NavLink>
              </li>
            
            </ul>
             
            {/* Profile Section */}
            <div className='mt-6 p-4 '>
              <div className='flex items-center'>
                <div className="">
                <img src={Rectangles} alt="" />
                </div>
              </div>
            </div>

            {/* Logout */}
            <ul className='mt-4  '>
              <li className="ml-10">
                <NavLink
                  to='/logout'
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-semibold flex items-center"
                      : "flex items-center"
                  }
                >
                  <Icon icon={'streamline:logout-1'} className='mr-2 text text-[#E3434C] w-[24px] h-[24px]' />
                  <span className="text-[#E3434C] w-[63px] h-[20px] tetx-[16px] leading-[100%] font-normal font-Readex">Log Out</span> 
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <Outlet />
      </section>
    </main>
  );
};

export default FirstLayout;






































