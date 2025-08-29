// src/pages/About.jsx
import React from "react";
import Guardian from "../assets/IMAGES/Guardian.png"; // <-- replace with your image path

const About = () => {
  return (
    <main className="bg-white text-[#1a1a1a] px-6 md:px-20 lg:px-32 py-12">
      {/* About Med-Vault Section */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          About Med-Vault
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
          We are a health technology company dedicated to connecting hospitals,
          healthcare professionals, and patients through a single, secure
          Patient ID system.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Guardian}
              alt="Doctor with patient"
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              We are a health technology company dedicated to building a
              smarter, safer, and more connected healthcare system. Our platform
              provides every patient with a unique identification number that
              links their medical records across all verified hospitals in the
              country. This ensures doctors, nurses, pharmacists, and
              lab technicians can access accurate information anytime, improving
              diagnosis, treatment, and collaboration. For hospitals, we simplify
              operations with tools for managing departments, staff, compliance,
              and reports. For patients, the system makes healthcare seamless by
              allowing them to book appointments, manage their data, and receive
              quality care wherever they go. Our mission is simple: to put
              patients first while empowering hospitals with the technology they
              need to deliver world-class care.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          How it Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Connecting every hospital and patient with one secure ID —
          making healthcare seamless, transparent, and accessible anytime,
          anywhere.
        </p>
      </section>
    </main>
  );
};

export default About;
