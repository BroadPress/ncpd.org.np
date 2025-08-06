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
                <title>1st National Philanthropy and Fundraising Conference in Nepal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Main Container */}
            <div className="container mx-auto px-4 py-8">

                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">1st National Philanthropy and Fundraising Conference in Nepal</h1>

                    {/* Breadcrumbs */}
                    <nav className="mt-2 text-sm text-black">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/news" className="hover:underline">News</Link>
                        <span className="mx-2">/</span>
                        <span className="text-red-800">1st National Philanthropy and Fundraising Conference in Nepal</span>
                    </nav>
                </header>

                {/* Main Content and Sidebar Layout */}
                <main className="lg:flex lg:space-x-8">

                    {/* Main Content Section */}
                    <div className="lg:w-2/3">
                        <div className="relative rounded-lg overflow-hidden mb-6">
                            {/* Using a placeholder image since the original URL is not provided */}
                            <Image
                                src="/home/ncpd-conference-1.png"
                                alt="1st National Philanthropy and Fundraising Conference in Nepal"
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
                                Kathmandu- First National Philanthropy and Fundraising Conference in Nepal to be organized in Nepal by Nepal Center for Philanthropy and Development (NCPD). This two days conference going held in 27-28Feb. 2019, Kathmandu, Nepal.
                            </p>

                            <p className="text-black leading-relaxed mb-4 text-lg">
                                In talking with Nepalayatimes, CEO of the Nepal Center for Philanthropy and Development (NCPD), Rewati Raman Dhakal said that this program is for contributed to make the philanthropy of Nepal more resourceful, impactful and sustainable. He added, The main strategies and aim to meet through this conference are enhancing the capacity and building competency thereby to fetch the resources, forging an alliance between key civil society actors of Nepal and other countries in the mutual learning and experience sharing for future cooperation, creating asynergy by connecting the grass-roots CSO actors with others from similar fields, commitment towards the accountability culture by gaining confidence.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                In this program majorly talk in these topics:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-black">
                                <li>The fundraising trend in the Asia and opportunities for Nepalese CSOs.</li>
                                <li>The effective nonprofit management and the fundraising strategy.</li>
                                <li>The priorities, prerequisites of the international foundations and ideas and tools to fetch resources.</li>
                                <li>Current opportunities and challenges with institutional development cooperation agencies & tips for writing an effective grant proposal.  </li>
                                <li>Art of the effective donor communication,persuasion and negotiation skills.</li>
                                <li>Best practices and challenges of localresource mobilization</li>
                                <li>Transparency, accountability  for branding and sustainability of CSOs</li>
                            </ul>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">Key Speaker of Conference:</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">Prof. Dr Bhagwan Koirala, ManmohanCardiothoracic Vascular and Transplant Center, Nepal, Prof. Bekay Ahn, (Ph.D),President of International Council of Non Profit Management, South Korea, Mr.Jeroninio Almeida, Former CEO of Action Aid India and InternationalConfederation of NGOs, India, Ms Reem Abudulhamed, Lead Private SectorPhilanthropy  for Middle East and NorthAfrica and Asia, UNHCR, SaudiArabia, Dr. Shibesh Chandra Regmi, Country Director, Ipas, Nepal, Mr GovindaNeupane, Country Director, IM Swedish Development Partners, Nepal</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">Dhakal led organization Nepal Center for Philanthropy and Development (NCPD) is a consulting entity that promotes the culture of philanthropy in Nepal as well as works towards creating high impact and integrity among the recipients enhancing the talent, trust, and treasure of philanthropic and civil society organizations of Nepal. NCPD is a trusted ambassador, partner and member of various global organizations including but not limited to Resource Alliance, UK, Asia Philanthropy Award, Korea, Korean society of Philanthropy, an international council of non-profit management, Alliance for Good, Singapore. Participating member certified fundraising executive (CFRE).

                            </p>
                        </div>
                    </div>

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
