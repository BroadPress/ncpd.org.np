"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LogoSection from "@/components/ui/logo";

interface NewsItem {
  id: string;
  title: string;
  imageSrc: string;
  date: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Workshop on SDG Progress Review",
    imageSrc: "/news/sdg-workshop.png",
    date: "23 May 2024",
    href: "/workshop-on-sdg-progress-review",
  },
  {
    id: "2",
    title: "Philanthropy in Nepal",
    imageSrc: "/news/nonprofit.jpg",
    date: "23 May 2024",
    href: "/philanthropy-in-nepal",
  },
  {
    id: "3",
    title: "Fundraising Training for Non-Profit Organizations Held in Kathmandu",
    imageSrc: "/news/kathmandu-training.jpg",
    date: "03 Aug 2020",
    href: "/fundraising-training-for-non-profit-organizations-held-in-kathmandu",
  },
  {
    id: "4",
    title: "Certified Fund Raising Specialist (CFRS) Training of Trainers kicked off",
    imageSrc: "/news/cfrs-tot.jpg",
    date: "03 Aug 2020",
    href: "/certified-fund-raising-specialist-cfrs-training-of-trainers-kicked-off",
  },
  {
    id: "5",
    title: "Interaction Between Disability Activists and Korean Philanthropist Held",
    imageSrc: "/news/disability-korea.jpg",
    date: "03 Aug 2020",
    href: "/interaction-between-disability-activists-and-korean-philanthropist-held",
  },
  {
    id: "6",
    title: "Trend of Nepal's Foreign Aid Mobilization In Different Political Context",
    imageSrc: "/news/foreign-aid.jpg",
    date: "03 Aug 2020",
    href: "/trend-of-nepals-foreign-aid-mobilization-in-different-political-context",
  },
  {
    id: "7",
    title: "Donating Properties and Selling Medals for Fundraising at National Innovation Center",
    imageSrc: "/news/nic-donation.jpg",
    date: "03 Aug 2020",
    href: "/donating-properties-and-selling-medals-for-fundraising-and-sustainability-of-nat",
  },
  {
    id: "8",
    title: "Philanthropy and Fundraising Conference Successfully Held in Nepal",
    imageSrc: "/news/conference-success.jpg",
    date: "03 May 2019",
    href: "/philanthropy-and-fundraising-conference-successfully-held-in-nepal",
  },
  {
    id: "9",
    title: "1st National Philanthropy and Fundraising Conference in Nepal",
    imageSrc: "/news/conference-first.png",
    date: "03 May 2019",
    href: "/1st-national-philanthropy-and-fundraising-conference-in-nepal",
  },
];

const NewsPage: React.FC = () => {
  return (
    <>{/* Page Header */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2" initial="hidden" animate="visible">
          Gallery
        </motion.h1>
        <nav className="text-sm text-gray-600 mt-2">
          <a href="/" className="text-blue-700 hover:text-blue-900">Home</a> / <span className="text-blue-600">Gallery</span>
        </nav>
      </header>
    <div className="min-h-screen bg-white pt-16 pb-20 px-4 font-inter">
            {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {newsItems.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="group relative block overflow-hidden rounded-lg transition-transform hover:scale-[1.01]"
          >
            <div className="relative w-full h-56 sm:h-60 md:h-64">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-base sm:text-lg leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
              {/* Footer Logo */}
            <LogoSection />
    </>
  );
};

export default NewsPage;
