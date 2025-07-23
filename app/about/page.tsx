"use client";
import React, { useState } from "react";
import LogoSection from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const team: TeamMember[] = [
  {
    name: "Rewati Raman Dhakal",
    title: "Founder & CEO",
    image: "/team/rewati.jpg",
    bio: "Rewati Raman Dhakal is the visionary founder and CEO of NCPD..."
  },
  {
    name: "Bishal Rai",
    title: "Co-Founder & Director",
    image: "/team/bishal.jpg",
    bio: "Bishal Rai serves as Co-Founder and Director of NCPD..."
  },
  {
    name: "Jerry Clewett",
    title: "International Development Consultant",
    image: "/team/jerry.jpg",
    bio: "Jerry Clewett is an experienced International Development Consultant..."
  },
  {
    name: "Dr. Christian Gahrmann",
    title: "Philanthropy & Fundraising Consultant",
    image: "/team/christian.jpg",
    bio: "Dr. Christian Gahrmann is a renowned expert in philanthropy and fundraising..."
  },
  {
    name: "Sharad Chandra Neupane",
    title: "Development Expert",
    image: "/team/sharad.jpg",
    bio: "Sharad Chandra Neupane is a seasoned Development Expert..."
  },
];

const tabContent = {
  vision: {
    title: "Vision",
    text: "An enabling environment where philanthropy is impactful and sustainable...",
    image: "/carousel/what-is-philanthropy-bekay-ahn.jpg",
    alt: "Vision Illustration"
  },
  mission: {
    title: "Mission",
    text: "Carry out research, capacity building, networking, and dialogue...",
    image: "/carousel/ncpd-conference-2019-session.jpg",
    alt: "Mission Illustration"
  },
  goal: {
    title: "Goal",
    text: "To enhance the capacity, credibility, and sustainability of philanthropy.",
    image: "/carousel/ncpd-certified-campaign-manager-certification-distribution-program.jpeg",
    alt: "Goal Illustration"
  }
};

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'goal'>('vision');

  const openModal = (member: TeamMember) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 font-inter antialiased">
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2" initial="hidden" animate="visible" variants={fadeUp}>
          About NCPD
        </motion.h1>
        <nav className="text-sm text-gray-600 mt-2">
          <a href="/" className="text-blue-700 hover:text-blue-900">Home</a> / <span className="text-blue-600">About</span>
        </nav>
      </header>

      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="w-full flex justify-center py-6">
        <img src="/about/ncpd-logo.png" alt="NCPD Highlight" className="w-1/2 h-auto object-contain rounded-xl" />
      </motion.div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 space-y-6 text-gray-800 leading-relaxed">
        {[
          "NCPD is an organization dedicated to creating an enabling environment...",
          "It conducts research, training, conferences, seminars, and workshops...",
          "NCPD's ultimate goal is to support and enhance the capacity..."
        ].map((text, index) => (
          <motion.p key={index} className="max-w-5xl mx-auto text-base sm:text-lg" initial="hidden" animate="visible" custom={1} variants={fadeUp}>
            {text}
          </motion.p>
        ))}
      </main>

      <motion.section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6" variants={fadeUp} initial="hidden" whileInView="visible">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-xl p-1 border border-gray-200">
            {(['vision', 'mission', 'goal'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4"
        >
          {activeTab === 'mission' ? (
            <>
              <div>
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">{tabContent[activeTab].title}</h2>
                <p className="text-gray-700 leading-relaxed">{tabContent[activeTab].text}</p>
              </div>
              <div className="w-full h-full">
                <img src={tabContent[activeTab].image} alt={tabContent[activeTab].alt} className="w-full h-auto rounded-xl object-cover" />
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-full">
                <img src={tabContent[activeTab].image} alt={tabContent[activeTab].alt} className="w-full h-auto rounded-xl object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">{tabContent[activeTab].title}</h2>
                <p className="text-gray-700 leading-relaxed">{tabContent[activeTab].text}</p>
              </div>
            </>
          )}
        </motion.div>
      </motion.section>

      <motion.section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6" variants={fadeUp} initial="hidden" whileInView="visible">
        <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-3xl text-center font-bold text-blue-800 mb-4 tracking-tight">Objectives</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            {[
              "Conduct and organize research, training, conferences...",
              "Conduct dialogue for enabling environments...",
              "Work with donors, advisors, financial institutions...",
              "Facilitate networking and collaboration...",
              "Assist with strategic plan development...",
              "Support civil society organizations to uphold integrity...",
              "Praise and honor ideal and unsung philanthropists."
            ].map((obj, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <p>{obj}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6" variants={fadeUp} initial="hidden" whileInView="visible">
        <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-3xl text-center font-bold text-blue-800 mb-4 tracking-tight">Core Values</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            {[
              "Integrity: We are committed to honesty...",
              "Impact: We believe that philanthropic efforts...",
              "Inclusion: We value the full participation...",
              "Transparency and Accountability: We hold ourselves...",
              "Collaboration and Partnership: We embrace sharing..."
            ].map((val, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <p><strong>{val.split(":")[0]}</strong>{val.slice(val.indexOf(":"))}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6" variants={fadeUp} initial="hidden" whileInView="visible">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div key={index} className="bg-white rounded-2xl p-6 text-center transition-all duration-300">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.title}</p>
              <button 
                onClick={() => openModal(member)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Full Bio
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ Carousel: Added margin-top to shift it down */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12">
        <LogoSection />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <img src={selectedMember.image} alt={selectedMember.name} className="w-20 h-20 rounded-full object-cover" />
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">{selectedMember.name}</h3>
                      <p className="text-blue-600 font-medium">{selectedMember.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Biography</h4>
                  <p>{selectedMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;
