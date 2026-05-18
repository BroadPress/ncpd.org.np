import LogoSection from "@/components/ui/logo";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export default function ConferencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 font-inter antialiased flex flex-col">
      {/* Header Section */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2">
          Conferences
        </h1>
      </header>

      {/* Main Content Area - Conference List */}
      <main className="flex justify-center py-16">
        <div className="w-full max-w-7xl overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 px-2 lg:px-12 py-6">
          <div className="lg:w-200 relative h-64 lg:h-auto rounded-2xl flex items-center justify-center overflow-hidden group">
            <Image
              src="/home/avpn-conference.jpg"
              alt="AVPN Global Conference 2026"
              height={400}
              width={400}
              className="rounded-2xl h-80 w-full"
            />
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0 bg-white opacity-20 group-hover:h-full transition-all duration-700 ease-in-out" />
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-180 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-2">
              AVPN Global Conference 2026
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Date:</span> 25–27 August 2026
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Location:</span> New Delhi, India
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              As Asia's largest gathering of social investors, the Conference is designed to move beyond dialogue and demonstrate how capital, policy and partnerships can drive inclusive growth and scalable impact across the region.

Three days of collaboration, capital mobilisation and bold ideas shaping Asia's social investment ecosystem.

A Blueprint for Action in Asia: Under the theme A Blueprint for Action in Asia, the Conference will explore how philanthropy, impact investing, blended finance and corporate capital can work together to accelerate solutions across the region. Through 12 thematic tracks, discussions will tackle priorities shaping Asia's future, including: Climate Action, Gender Equity, Health Impact, Impact Investing, AI for Good, Corporate Giving, Cross-Sector Partnerships and more.

Secure your place today.</p>
            <div className="flex items-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Image src="/home/chair.png"
                  height={50}
                  width={50} alt={""}
                  className="rounded-2xl border-2 border-primary p-2" />
                <div>
                  <span className="text-3xl text-primary font-bold ">2,000+</span>
                  <p className="text-gray-500 text-base">Leaders</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-8">
                <Image src="/home/receipt.png"
                  height={50}
                  width={50} alt={""}
                  className="rounded-2xl border-2 border-primary p-2" />
                <div>
                  <span className="text-3xl text-primary font-bold ">200+</span>
                  <p className="text-gray-500 text-base">Speakers</p>
                </div>
              </div>
            </div>
            {/* List */}
            <ul className="space-y-4 text-sm mb-4">
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                    <MdCheckCircle size={20} />
                  </div>
                </div>
                <p className="text-gray-700 group-hover:text-gray-900 font-medium transition">
                  100+ sessions across philanthropy, impact investing and corporate leadership
                </p>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                    <MdCheckCircle size={20} />
                  </div>
                </div>
                <p className="text-gray-700 group-hover:text-gray-900 font-medium transition">
                  12 thematic tracks including Climate Action, Gender Equity, Health Impact, and more
                </p>
              </li>
            </ul>

            <a
              href="https://avpn.asia/conference/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-3 rounded-xl text-base font-medium text-white bg-primary w-full sm:w-auto mx-auto group text-center"
            >
              <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left z-0"></span>
              <span className="relative z-10">Register Now</span>
            </a>

          </div>
        </div>
      </main>

      {/* Previous Conferences Section */}
      <section className="py-16 px-4 sm:px-8 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center">
            Previous Conferences
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1st National Philanthropy and Fundraising Conference */}
            <div className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/home/ncpd-first-national-funraising-conference.png"
                  alt="1st National Philanthropy and Fundraising Conference"
                  height={250}
                  width={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-blue-800 mb-3">
                1<span className="text-lg">st</span> National Philanthropy and Fundraising Conference
              </h3>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">Date:</span> July 1, 2019
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                One of the main reasons for resource crunch is the shifting of donors' priority from Nepal to other global issues. This conference brought together stakeholders to discuss opportunities for funding and resources for CSOs.
              </p>
              <a
                href="/1st-national-philanthropy-and-fundraising-conference"
                className="relative inline-block px-6 py-2 rounded-lg text-sm font-medium text-white bg-primary group"
              >
                <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left z-0 rounded-lg"></span>
                <span className="relative z-10">Learn More</span>
              </a>
            </div>

            {/* Additional previous conference - can be expanded */}
            <div className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/home/ncpd-conference-2019.jpg"
                  alt="Philanthropy and Fundraising Conference"
                  height={250}
                  width={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-blue-800 mb-3">
                Philanthropy and Fundraising Conference
              </h3>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">Date:</span> 2019
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Successfully held in Nepal, this conference brought together philanthropic leaders and fundraising specialists to discuss strategies for sustainable development and impact creation across the region.
              </p>
              <a
                href="/philanthropy-and-fundraising-conference-successfully-held-in-nepal"
                className="relative inline-block px-6 py-2 rounded-lg text-sm font-medium text-white bg-primary group"
              >
                <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left z-0 rounded-lg"></span>
                <span className="relative z-10">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <LogoSection />
    </div>
  );
}