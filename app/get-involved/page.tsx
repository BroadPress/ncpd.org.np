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
      <section className="max-w-4xl mx-auto px-6 py-28">
        <div className="space-y-10">
          
          {/* Nepal Organizations */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              Nepal-based Organizations
            </h2>

            <p className="text-gray-700 leading-relaxed">
              If you are interested in our service offerings or require tailored
              support, please get in touch with us at{" "}
              <span className="font-semibold text-blue-700">
                info@ncpd.org.np
              </span>
              .
            </p>
          </div>

          {/* International */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
              International Organizations & Individuals
            </h2>

            <p className="text-gray-700 leading-relaxed">
              If you are interested in learning about our approach and how you
              can support building a resilient future for our Himalayan
              country, please contact us at{" "}
              <span className="font-semibold text-blue-700">
                info@ncpd.org.np
              </span>
              .
            </p>
          </div>

        </div>
      </section>
    </>
  );
}