import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Office from '../assets/IMAGES/Office.png'
import Machine from '../assets/IMAGES/Machine.png'
import Macbook from '../assets/IMAGES/Macbook.png'
import Grace from '../assets/IMAGES/Grace.png'
export default function HealthcareServices() {
  return (
    <div className="bg-[#f3f6ff] min-h-screen w-full flex flex-col items-center font-sans">
      {/* Services Section */}
      <section className="w-full max-w-6xl px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Connecting every hospital and patient with one secure ID — making
          healthcare seamless, transparent, and accessible anytime, anywhere.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col items-center">
            <img
              src={Office}
              alt="Medical Staff Tools"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Medical Staff Tools</h3>
            <p className="text-gray-600 text-sm">
              Providing essential digital tools for healthcare professionals to
              improve service delivery and efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col items-center">
            <img
              src={Machine}
              alt="Unified Patient Health Record"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">
              Unified Patient Health Record
            </h3>
            <p className="text-gray-600 text-sm">
              A centralized health record accessible across hospitals for better
              diagnosis, treatment, and patient outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col items-center">
            <img
              src={Macbook}
              alt="Appointment & Scheduling"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">
              Appointment & Scheduling
            </h3>
            <p className="text-gray-600 text-sm">
              Patients can easily book and manage appointments with healthcare
              providers, saving time and improving access.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-6xl px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Your questions matter. Reach out, we’re here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div className="flex flex-col items-start space-y-4 text-left">
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-red-500" /> Address: [Insert Office
              Address]
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5 text-red-500" /> +234 806 123 4567
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-red-500" /> support@healthid.ng
            </p>
            <p className="text-gray-700">
              Working Hours: Monday – Friday, 9:00 AM – 6:00 PM
            </p>
          </div>

          {/* Contact Image */}
          <div className="flex justify-center">
            <img
              src={Grace}
              alt="Contact"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

