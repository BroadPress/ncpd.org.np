"use client";
import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LogoSection from "@/components/ui/logo";

// Define the type for the sidebar article data
type SidebarArticle = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
};

// Mock data for the sidebar articles
const sidebarArticles: SidebarArticle[] = [
    {
        id: 1,
        title: 'Workshop on SDG Progress Review',
        imageUrl: '/home/Workshop on SDGs progress Review .jpg',
        link: '/workshop-on-sdg-progress-review',
    },
    {
        id: 2,
        title: 'Philanthropy in Nepal',
        imageUrl: '/carousel/what-is-philanthropy-bekay-ahn.jpg',
        link: '/philanthropy-in-nepal',
    },
    {
        id: 3,
        title: 'Fundraising Training for Non Profit Organizations Held in Kathmandu',
        imageUrl: '/home/Fundraising.jpeg',
        link: '/fundraising-training-for-non-profit-organizations-held-in-kathmandu',
    },
    {
        id: 4,
        title: 'Certified Fund Raising Specialist (CFRS) Training of Trainers kicked off',
        imageUrl: '/home/Certified.jpeg',
        link: '/certified-fund-raising-specialist-cfrs-training-of-trainers-kicked-off',
    },
    {
        id: 5,
        title: 'Interaction Between Disability Activists and Korean Philanthropist Held',
        imageUrl: '/home/Interaction Between Disability Activists and Korean Philanthropist Held.jpg',
        link: '/interaction-between-disability-activists-and-korean-philanthropist-held',
    },
    {
        id: 6,
        title: "Trend of Nepal's Foreign Aid Mobilization in Different Political Context",
        imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
        link: '/trend-of-nepals-foreign-aid-mobilization-in-different-political-context',
    },
    {
        id: 7,
        title: 'Donating Properties, and Selling Medals for fundraising and sustainability of National Innovation Center in Nepal',
        imageUrl: '/home/mahabir-pun.jpg',
        link: '/donating-properties-and-selling-medals-for-fundraising-and-sustainability-of-nat',
    },
    {
        id: 8,
        title: 'Philanthropy and Fundraising Conference Successfully Held in Nepal',
        imageUrl: '/home/ncpd-conference-2019.jpg',
        link: '/philanthropy-and-fundraising-conference-successfully-held-in-nepal',
    },
    {
        id: 9,
        title: '1st National Philanthropy and Fundraising Conference in Nepal',
        imageUrl: '/home/ncpd-conference-1.png',
        link: '/1st-national-philanthropy-and-fundraising-conference-in-nepal',
    },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 mt-20">
      <Head>
        <title>Workshop on SDG Progress Review</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Workshop on SDG Progress Review</h1>
          
          {/* Breadcrumbs */}
          <nav className="mt-2 text-sm text-black">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:underline">News</Link>
            <span className="mx-2">/</span>
            <span className="text-red-800">Workshop on SDG Progress Review</span>
          </nav>
        </header>

        {/* Main Content and Sidebar Layout */}
        <main className="lg:flex lg:space-x-8">
          
          {/* Main Content Section */}
          <div className="lg:w-2/3">
            <div className="relative rounded-lg overflow-hidden mb-6">
              {/* Using a placeholder image since the original URL is not provided */}
              <Image
                src="/home/Workshop on SDGs progress Review .jpg"
                alt="Workshop on SDG Progress Review and Roles of Stakeholders"
                width={900}
                height={500}
                layout="responsive"
                className="rounded-lg"
              />
            </div>

            {/* Article Meta and Content */}
            <div className="p-6">
              <span className="block text-sm text-black mb-4">23 May, 2024</span>
              
              <p className="text-black leading-relaxed mb-4 text-lg">
                Nepal Center for Philanthropy and Development (NCPD) organized a workshop on "SDGs Progress Review & Roles of Stakeholders".  The event was organized  in partnership with Youth Initiative Nepal, Nepal SDGs Forum-NGO Federation, and GIVING Tuesday. Nepal has made significant efforts to integrate the Sustainable Development Goals (SDGs) into its national development frameworks and policies. The SDGs are a set of 17 goals adopted by all United Nations Member States in 2015, aiming to promote prosperity while protecting the planet. Nepal's commitment to the SDGs is reflected in key policy documents, such as the current 15th Development Plan and the 25 Year Long-Term Vision.  These documents internalize the SDGs and assign SDG codes to all national development programs through the Medium-Term Expenditure Framework.
                </p>
              
              <p className="text-black leading-relaxed mb-4 text-lg">
                Nepal has made progress in implementing the Sustainable Development Goals (SDGs), but there are still challenges to overcome.
                </p>
            </div>
          </div>
          
          {/* Sidebar Section */}
          {/* Sidebar Section */}
<aside className="lg:w-1/3 mt-8 lg:mt-0">
    <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Latest News</h2>

        <ul className="space-y-4">
            {sidebarArticles.map((article) => (
                <li key={article.id} className="flex items-center space-x-4">
                    <Link href={article.link || "#"} className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                width={80}
                                height={60}
                                className="rounded-md"
                            />
                        </div>
                        <div className="flex-grow">
                            <span className="text-base text-gray-800 hover:text-green-600">
                                {article.title}
                            </span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
</aside>

        </main>
      </div>
        {/* Logos */}
                <LogoSection />
    </div>
  );
};

export default App;
