
// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./COMPONENTS/nav";
import About from "./COMPONENTS/About";
import HealthcareServices from "./COMPONENTS/HealtCareServices";
import HealthSpecialist from './COMPONENTS/LOg/HealthSpecialist'
import Footer from "./COMPONENTS/Ui/Footer";
import Login from "./COMPONENTS/LOg/LoginPortal";
import HowItWorks from "./COMPONENTS/HowItWorks";

// Role-based signup/login components
import Hospital from "./COMPONENTS/LOg/Hospital";
// (You will need to create these two if not already)
// import Specialist from "./COMPONENTS/LOg/Specialist";
// import Patient from "./COMPONENTS/LOg/Patient";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <About />
              <HowItWorks />
              <HealthcareServices />
           
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Role Signup/Login Pages */}
        <Route path="/hospital-signup" element={<Hospital />} />
         <Route path="/specialist-signup" element={<HealthSpecialist/>} />
        {/* <Route path="/patient-signup" element={<Patient />} />  */}

        {/* Example extra route for Nav (optional) */}
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </Router>
  );
};

export default App;

