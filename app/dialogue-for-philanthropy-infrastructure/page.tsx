"use client";
import React from "react";
import LogoSection from "@/components/ui/logo";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function DialogueForPhilanthropyInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Dialogue For Philanthropy Infrastructure
        </motion.h1>
        <nav className="text-sm text-gray-600 mt-2">
          <a href="/" className="text-blue-700 hover:text-blue-900">
            Home
          </a>{" "}
          / <span className="text-blue-600">Dialogue For Philanthropy Infrastructure</span>
        </nav>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-6 md:px-20 py-12">
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          We facilitate dialogue and advocate for an enabling environment that nurtures and sustains philanthropy in Nepal. This includes promoting integrated societal norms, supportive policies, and effective institutional infrastructure that encourage individuals, businesses, and communities to give, collaborate, and contribute to the public good. By engaging with government institutions, civil society organizations, philanthropic actors, and the private sector, we work to ensure that philanthropy is recognized as an important pillar of national development.

        </p>
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
           Through research, policy discussions, and multi-stakeholder engagement, we highlight the value of local giving traditions and modern philanthropic practices, and advocate for policies that make it easier, more transparent, and more impactful for people and organizations to contribute resources for social change. 

        </p>
      </main>

      {/* Partner Logos Section */}
      <LogoSection />
    </div>
  );
}