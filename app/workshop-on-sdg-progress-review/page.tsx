"use client";
import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
    link: '#',
  },
  {
    id: 3,
    title: 'Fundraising Training for Non Profit Organizations Held in Kathmandu',
    imageUrl: '/home/Fundraising.jpeg',
    link: '#',
  },
  {
    id: 4,
    title: 'Certified Fund Raising Specialist (CFRS) Training of Trainers kicked off',
    imageUrl: '/home/Certified.jpeg',
    link: '#',
  },
  {
    id: 5,
    title: 'Interaction Between Disability Activists and Korean Philanthropist Held',
    imageUrl: '/home/Interaction Between Disability Activists and Korean Philanthropist Held.jpg',
    link: '#',
  },
  {
    id: 6,
    title: "Trend of Nepal's Foreign Aid Mobilization in Different Political Context",
    imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
    link: '#',
  },
  {
    id: 7,
    title: 'Donating Properties, and Selling Medals for fundraising and sustainability of National Innovation Center in Nepal',
    imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
    link: '#',
  },
  {
    id: 8,
    title: 'Philanthropy and Fundraising Conference Successfully Held in Nepal',
    imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
    link: '#',
  },
  {
    id: 9,
    title: '1st National Philanthropy and Fundraising Conference in Nepal',
    imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
    link: '#',
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
            <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
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
              <span className="block text-sm text-gray-500 mb-4">23 May, 2024</span>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Nepal Center for Philanthropy and Development (NCPD) organized a workshop on "SDGs Progress Review & Roles of Stakeholders". The event was organized in partnership with Youth Initiative Nepal, Nepal SDGs Forum-NGO Federation, and GIVINQ Tuesday. Nepal has made significant efforts to integrate the Sustainable Development Goals (SDGs) into its national development frameworks and policies. The SDGs are a set of 17 goals adopted by all United Nations Member States in 2015, aiming to promote prosperity while protecting the planet. Nepal's commitment to the SDGs is reflected in key policy documents, such as the current 15th Development Plan and the 25 Year Long-Term Vision. These documents internalize the SDGs principles and targets, guiding the country's development trajectory.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                The workshop served as a crucial platform for various stakeholders, including government officials, civil society representatives, private sector leaders, and academics, to review the progress made towards achieving the SDGs in Nepal. Participants discussed the challenges encountered, shared best practices, and identified opportunities for accelerating progress. Key areas of focus included poverty reduction (SDG 1), quality education (SDG 4), gender equality (SDG 5), and climate action (SDG 13).
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                A major theme of the workshop was the importance of collaborative action. The organizers and participants emphasized that achieving the ambitious targets of the SDGs requires a multi-stakeholder approach. Civil society organizations were highlighted for their role in advocacy and grassroots implementation, while the private sector was recognized for its potential to drive innovation and sustainable business practices. Government agencies were lauded for their efforts in creating a conducive policy environment, and international partners for their support in funding and technical expertise.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The workshop concluded with a call to action, urging all stakeholders to renew their commitment to the SDGs. The outcomes of the discussions will be used to inform future policy-making and to strengthen the country's collective efforts in building a more prosperous and sustainable Nepal for all.
              </p>
            </div>
          </div>
          
          {/* Sidebar Section */}
          <aside className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Latest News</h2>
              
              <ul className="space-y-4">
                {sidebarArticles.map((article) => (
                  <li key={article.id} className="flex items-center space-x-4">
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
                      <Link href="#" className="text-base text-gray-800 hover:text-blue-600 hover:underline">
                        {article.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default App;
