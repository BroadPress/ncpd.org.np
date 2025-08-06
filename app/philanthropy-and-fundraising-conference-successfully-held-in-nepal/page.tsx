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
        <title>Philanthropy and Fundraising Conference Successfully Held in Nepal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Philanthropy and Fundraising Conference Successfully Held in Nepal</h1>
          
          {/* Breadcrumbs */}
          <nav className="mt-2 text-sm text-black">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:underline">News</Link>
            <span className="mx-2">/</span>
            <span className="text-red-800">Philanthropy and Fundraising Conference Successfully Held in Nepal</span>
          </nav>
        </header>

        {/* Main Content and Sidebar Layout */}
        <main className="lg:flex lg:space-x-8">
          
          {/* Main Content Section */}
          <div className="lg:w-2/3">
            <div className="relative rounded-lg overflow-hidden mb-6">
              {/* Using a placeholder image since the original URL is not provided */}
              <Image
                src="/home/ncpd-conference-2019.jpg"
                alt="Philanthropy and Fundraising Conference Successfully Held in Nepal"
                width={900}
                height={500}
                layout="responsive"
                className="rounded-lg"
              />
            </div>

            {/* Article Meta and Content */}
            <div className="p-6">
              <span className="block text-sm text-black mb-4">03 May, 2019</span>
              
              <p className="text-black leading-relaxed mb-4 text-lg">
                The 1st National Philanthropy &Fund Raising Conference in Nepal has successfully organized by the Nepal Center for Philanthropy and Development on the 27-28 February. This conference was the first fundraising conference in the country and the main event of philanthropy in Nepal. On which more than 100 participants have attended as representative of various International and National NGOs,  and CSOs.
                </p>
              
              <p className="text-black leading-relaxed mb-4 text-lg">
                It was Nepal's first philanthropy & Fundraising conference where it had featured global thought-leaders, change makers and Nepal's fundraisers like
                </p>
                <p className="text-black leading-relaxed mb-4 text-lg">Prof. Dr BhagwanKoirala, Manmohan Cardiothoracic Vascular and Transplant Center, Nepal, Prof. BekayAhn, CFRE, President of International Council of Non Profit Management, South Korea, Mr. Jeroninio Almeida, Former CEO of Action Aid India and International Confederation of NGOs, India, Ms Reem Abudulhamid, Lead Private Sector Philanthropy  for Middle East and North Africa and Asia    UNHCR, Saudi Arabia, Dr. Shibesh Chandra Regmi, Country Director, Ipas, Nepal,  and Mr.  GovindaNeupane, Country Director, IM Swedish Development Partners, Nepal.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">The speakers are the world recognize fundraising trainers, philanthropists, and successful social activists. They have shared profound ideas, solutions and best practices on philanthropy and fundraising. They provided critical trends, techniques and professional development learning over two days with sector insiders that have challenged thinking and gave the latest knowledge and fresh ideas. They have been shared the motivation idea to trial new approaches to fundraising.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">Rewati Raman Dhakal, CEO of Nepal Center for Philanthropy and Development (NCPD), said it has been opportunity to Learn, Connect and Grow, and more fruitful for NGO, CSOs and other fundraisers to make time for professional development as fundraising is continually evolving.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">“Fundraising is increasingly challenging with declining donor rates and retention in the context of Nepal. As a result, fundraisers need to think about new and innovative ways to engage and retain their donors. NCPD Philanthropy & Fundraising Conference 2019 has been a critical way to pick up the learning’s to do that,” he said.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">And Director of NCPD Bishal Rai mentioned that conference is a focus on Fundraising, but we believe fundraising is not about digit, its positive changes in the lives of people and communities. And he added this conference targeted to increase philanthropy fundraising and proper uses of it, proper uses of resources with the connection of community, it is a way to meet sustainable development.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">“This conference is to make a bond of sustainable solidarity between donor agencies and NGOs, CSOs of Nepal. We will continue this conference to contribute to for fund and capital raising for the non-profit and private sectors which will be meaningful for the socio-economic development of Nepal.” Said Rai.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">On this conference, more than 11-plus international and local experts and best-practice fundraising have been shared their ideas over more than 100 participants. The theme of this conference was the Philanthropy Beyond Fund Raising.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">NCPD Conference 2019 also offered participants a chance to interact with engaging speakers from around the globe including dynamic keynotes, find out about products and services that can help them raise more fund for their organizations, and network with fundraising peers from across the world, who are working in Nepal at a variety of receptions and events.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">“Networking can be so beneficial for a variety of reasons. Often the learning has been just as valuable outside the conference. The conference has facilitated changes to the next job or makes some influential business contacts for the future.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">In this Conference, President of the International Council for Non-Profit Management, South Korea, Prof, and CFRE Bekay Ahn shared key Strategies over the philanthropy and fundraising in the 21st Century, Where is it moving and how can we move? And also he presented one Case Study- how the organization reached the top in philanthropy and fundraising success?

</p>
                <p className="text-black leading-relaxed mb-4 text-lg">Head of Global Philanthropy, UNHCR, Ms. Reem Abdelhamid expressed her idea over Building a pipe of fundraising prospect for Nepalese I/NGOs with sharing the Middle East and in Global Context. In this session, she said how Muslim countries are raising funding as philanthropy.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">And next speaker Mr. Jeroninio Almeida Former CEO of Action Aid India and International Confederation of NGOs, India, Fundraising Expert, India concerned that art & science of fundraising, how is it developing, measuring and improving fundraising impact. He has shown various case study video and noted that be factual and work with a good result over the community.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">From Nepalese export, Participants have gained knowledge about Key ingredients of the institutional fundraising by Mr. Govinda Neupane, Country Director of IM Swedish Development Partner, He addresses Nepal’s Current opportunities and challenges with institutional development cooperation agencies & tips for writing effective grant proposal, Art of the effective donor communication, persuasion and negotiation skills, and Best practices and challenges of local resource mobilization. And Dr. Shibesh Chandra Regmi, Country Director of Ipas and Chairperson of  Association of International NGOs has focused his idea for development and funding trend in Nepal - Yesterday, Today and Tomorrow. In his session, he said INGO/NGOs play a vital role in Nepal’s development, so no hurry to escape from your work, keep the passion, and do wisely for fundraising from philanthropists.</p>
                <p className="text-black leading-relaxed mb-4 text-lg">Likewise, Prof  Dr. Bhagwan Koirala, Manmohan Cardiothoracic Vascular and Transplant Center spoke on topic Input, Integrity, and

</p>
                <p className="text-black leading-relaxed mb-4 text-lg">Dr. Pramod Dhakal, Champion of Open University and Distance Education and Diaspora Nepalese has shared his work experience on the theme of Impact overwork and I am the community, I expect.

</p>
                <p className="text-black leading-relaxed mb-4 text-lg">Another session of the conference is Experience Sharing, in this session, they shared their experiences. </p>
                <p className="text-black leading-relaxed mb-4 text-lg">Mr. Cheese Gurung, President of Sukhawati Foundation, Nepal shared his experience about Challenges and opportunities of social enterprises in Nepal, Mr. Durga Bahadur Thapa, Mayor Beleka Municipality shared his work about successful Local resource Mobilization Nepal, and also Best practices and challenges of local resource mobilization. And Korean veteran fundraiser Mr. Kim Beum Yong, Secretary General of Council of Korean Foundation, and</p>
                <div className="relative rounded-lg overflow-hidden mb-6">
              {/* Using a placeholder image since the original URL is not provided */}
              <Image
                src="/home/ncpd-conference-2019-1.jpg"
                alt="Philanthropy and Fundraising Conference Successfully Held in Nepal"
                width={900}
                height={500}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">National and international delegates of the 1st National Philanthropy and Fundraising Conference.</p>
            <div className="relative rounded-lg overflow-hidden mb-6">
              {/* Using a placeholder image since the original URL is not provided */}
              <Image
                src="/home/ncpd-conference-2019-2.jpg"
                alt="Philanthropy and Fundraising Conference Successfully Held in Nepal"
                width={900}
                height={500}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">Prominent speakers in the front row and participants in their back at the 1st National Philanthropy and Fundraising Conference in Nepal.</p>
            <div className="relative rounded-lg overflow-hidden mb-6">
              {/* Using a placeholder image since the original URL is not provided */}
              <Image
                src="/home/ncpd-conference-2019-3.jpg"
                alt="Philanthropy and Fundraising Conference Successfully Held in Nepal"
                width={900}
                height={500}
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">Participants of the 1st National Philanthropy and Fundraising Conference communicating with each other.</p>
            <p className="text-black leading-relaxed mb-4 text-lg">Mr. Kim HongGu, HongGu Planning, South Korea have shared their work model and make key suggestions to Nepal's Non-Profit Sector and How Nonprofit Creates Impact in Korea. Their Idea of Philanthropy is concerned by the community, for the community to community; it means that Democratic Philanthropy practices in Korea.</p>
            <p className="text-black leading-relaxed mb-4 text-lg">At the end of our conversation, the Director of NCPD Mr. Rai also shared that the conference on philanthropy and fundraising will be held next year and will unveil the date soon. </p>
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
