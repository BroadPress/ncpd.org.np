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
                <title>Interaction Between Disability Activists and Korean Philanthropist Held</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Main Container */}
            <div className="container mx-auto px-4 py-8">

                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Interaction Between Disability Activists and Korean Philanthropist Held</h1>

                    {/* Breadcrumbs */}
                    <nav className="mt-2 text-sm text-black">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/news" className="hover:underline">News</Link>
                        <span className="mx-2">/</span>
                        <span className="text-red-800">Interaction Between Disability Activists and Korean Philanthropist Held</span>
                    </nav>
                </header>

                {/* Main Content and Sidebar Layout */}
                <main className="lg:flex lg:space-x-8">

                    {/* Main Content Section */}
                    <div className="lg:w-2/3">
                        <div className="relative rounded-lg overflow-hidden mb-6">
                            {/* Using a placeholder image since the original URL is not provided */}
                            <Image
                                src="/home/Interaction Between Disability Activists and Korean Philanthropist Held.jpg"
                                alt="Interaction Between Disability Activists and Korean Philanthropist Held"
                                width={900}
                                height={500}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Article Meta and Content */}
                        <div className="p-6">
                            <span className="block text-sm text-black mb-4">03 Aug, 2020</span>

                            <p className="text-black leading-relaxed mb-4 text-lg">
                                An interaction program on the vocation training and employment creation has been held successfully between the disability activists and the members of the Korean Society of Philanthropy in Kathmandu on 21st July 2019.
                            </p>

                            <p className="text-black leading-relaxed mb-4 text-lg">
                                The activists stated that the employment among persons with disabilities is very poor however the constitution, as well as many acts, are revised Nepal. During the interaction, Mr. Lee Choung Bum, prominent Lawyer and Philanthropist from South Korea, realized the urgency to offer vocational training to generate employment opportunities in Nepal, nevertheless, he also suggested to sincerely consider the political, environmental, social, technical, attitudinal and legal aspects while implementing vocation training and employment development schemes.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                On the occasion, Mr. Bekay Ahn who happens to be fundraising experts, scholar, authors and philanthropist urged activities to form a consortium of disability organizations to run fundraising campaigns successfully.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Blind Youth Association of Nepal and facilitated by Nepal Center for Philanthropy.
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
