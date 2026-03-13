"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetInvolved() {
  return (
    <>
      {/* Header */}
      <header className="pt-36 pb-10 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Involved
        </motion.h1>

        <nav className="text-sm text-gray-600 mt-3">
          <Link href="/" className="text-blue-700 hover:text-blue-900">
            Home
          </Link>{" "}
          / <span className="text-blue-600">Get Involved</span>
        </nav>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-28 space-y-10">
        {/* Introduction */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Engage with Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Nepal Centre for Philanthropy and Development (NCPD) welcomes collaboration with individuals, institutions, and partners who share our commitment to strengthening philanthropy, civil society, and social development in Nepal. There are several ways to engage with and contribute to our work.
          </p>
        </div>

        {/* Research Collaboration */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Research Collaboration
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NCPD welcomes collaboration with researchers, practitioners, and institutions interested in conducting research on issues related to the development, humanitarian, and philanthropic sectors in Nepal.
          </p>
        </div>

        {/* Partnerships */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Partnerships
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We welcome partnerships with organizations and experts interested in designing and implementing programs, initiatives, and services that align with NCPD’s mission and areas of work.
          </p>
        </div>

        {/* Virtual Events and Knowledge Exchange */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Virtual Events and Knowledge Exchange
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NCPD is open to co-organizing virtual dialogues, seminars, and knowledge-sharing events with partners whose objectives align with our values and strategic priorities.
          </p>
        </div>

        {/* Joint Convening */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Joint Convening
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collaborate with partners to convene conferences, seminars, workshops, policy dialogues, and research forums that bring stakeholders together to address key development and philanthropic issues.
          </p>
        </div>

        {/* Philanthropic Visits and Learning Tours */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Philanthropic Visits and Learning Tours
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We facilitate visits and learning tours for individuals, philanthropists, and institutions interested in understanding Nepal’s philanthropic landscape and its unique traditions of giving.
          </p>
        </div>

        {/* Volunteering */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Volunteering
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NCPD facilitate opportunities for national and international citizens to contribute their skills and expertise by volunteering with us or supporting initiatives in the broader philanthropy and development sector, either remotely or in person.
          </p>
        </div>

        {/* Internships */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Internships
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We offer internship opportunities for students and professionals from Nepal and abroad who wish to gain practical experience in philanthropy, civil society, and development.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
            Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For more information, please get in touch with us at{" "}
            <span className="font-semibold text-blue-700">info@ncpd.org.np</span>.
          </p>
        </div>
      </section>
    </>
  );
}