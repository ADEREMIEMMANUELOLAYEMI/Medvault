import { motion } from "framer-motion";
import Group from "../assets/IMAGES/Group.png"; // replace with your actual path
import Framer from "../assets/IMAGES/Framer.png";
import Placeholder from "../assets/IMAGES/Placeholder.png";

export default function MissionVision() {
  const sections = [
    {
      id: "mission",
      label: "Mission",
      text: `At the heart of our mission is a commitment to transforming the way healthcare is delivered and experienced. We aim to empower hospitals, doctors, and patients with a centralized platform that bridges gaps in communication, streamlines logistics, and enhances the quality of care. By integrating patient records, appointments, laboratory results, and billing into a secure system, we eliminate inefficiencies and create a seamless flow of information. Our mission is not just about digitization; it's about refocusing on what truly matters – serving patients better, improving their wellbeing, and enabling healthcare workers to operate at their highest potential. We are driven by innovation, guided by compassion, and dedicated to building a healthcare system that's efficient, patient-centered, and ready for the future.`,
      images: [Group, Framer],
      reverse: false,
    },
    {
      id: "vision",
      label: "Vision",
      text: `Our vision is to build a world where healthcare is seamlessly connected, universally accessible, and powered by innovation. We aspire to create an ecosystem where every hospital, clinic, and patient benefits from state-of-the-art technology, adaptable systems, and data-driven decisions. We envision a future where technology removes barriers to care, where doctors and patients interact without friction, and where patients are empowered to take charge of their health with confidence. By fostering innovation, inclusivity, and global reach, we are laying the foundation for a healthier, more connected world.`,
      images: [Placeholder],
      reverse: true,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-white space-y-24">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            section.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              {section.label}
            </span>
            <p className="text-gray-700 leading-relaxed text-sm lg:text-base whitespace-pre-line">
              {section.text}
            </p>
          </motion.div>

          {/* Images */}
          <div className="relative flex flex-col gap-6">
            {section.images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`${section.label} illustration ${i + 1}`}
                className={`rounded-2xl shadow-lg ${
                  i === 1 ? "w-1/2 absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%]" : "w-3/4"
                }`}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
