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
        imageUrl: '/home/Philanthropy-in-nepal.jpg',
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
                <title>Trend of Nepal's Foreign Aid Mobilization In Different Political Context</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Main Container */}
            <div className="container mx-auto px-4 py-8">

                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Trend of Nepal's Foreign Aid Mobilization In Different Political Context</h1>

                    {/* Breadcrumbs */}
                    <nav className="mt-2 text-sm text-black">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/news" className="hover:underline">News</Link>
                        <span className="mx-2">/</span>
                        <span className="text-red-800">Trend of Nepal's Foreign Aid Mobilization In Different Political Context</span>
                    </nav>
                </header>

                {/* Main Content and Sidebar Layout */}
                <main className="lg:flex lg:space-x-8">

                    {/* Main Content Section */}
                    <div className="lg:w-2/3">
                        <div className="relative rounded-lg overflow-hidden mb-6">
                            {/* Using a placeholder image since the original URL is not provided */}
                            <Image
                                src="/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg"
                                alt="Trend of Nepal's Foreign Aid Mobilization In Different Political Context"
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
                                Foreign Aid has played a crucial role in Nepal's overall development. Nepal has been receiving foreign aid mainly in the form of grant, loan, technical assistance and humanitarian aid since the 1950. According to a report on the Study on the Foreign Aid Mobilization in Federal Nepal, 2017 of the Ministry of Finance of Nepal the first Development Plan (1956-60), was entirely funded by foreign aid. It is also reported that in the early 1980s, the foreign aid used to contribute some 75 percent of the development expenditure of each fiscal year which decreased gradually as per the increase in internal income.
                            </p>

                            <p className="text-black leading-relaxed mb-4 text-lg">
                                According to the information of the Ministry of Finance of Nepal, quoted by The Himalayan Times Daily on 1st January 2018, the annual foreign aid disbursement volume was between $960 million and $1,100 million till 2015 AD. But the foreign aid disbursement significantly increased in the last fiscal year as the country received the pledged amount for the post-earthquake reconstruction. Nepal received aid worth $1,394.6 million in fiscal 2016-17, with an increment of 30 per cent as compared to the previous fiscal.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Uncovering the history on how the foreign and came into the Nepal, leads us nearly to the then Rana regime. Nepal officially promulgated its first official budget in 1951 AD after the demolish of the then Rana regime in 1950 AD and also felt the need of foreign aid to scale up the development plans because the then revenue was inadequate to carry out the development projects in the new political juncture.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Similarly, the Colombo Plan was the first multilateral development support Nepal had received after Nepal joined the Colombo Plan in 1952 AD. After that, Nepal started to receive scholarship programs offered by different countries especially for the studies in the professional and technical areas. In line with that plan, the country received grants for crucial areas like agriculture, transport, infrastructure, hydropower, communication, education health and industries.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                In course of time, the development cooperation changed it modality as per the development model of the first world countries after the Second World War. Multi Lateral Financial institutions were established and the development countries proactively offered the development cooperation fund to assist the developing countries like Nepal. During the 1960s, Nepal also expressed its interest and requested foreign agencies and bilateral donors for aid and bilateral grants to scale of its development and infrastructure projects. Amidst this, USAID was the first bilateral donors to Nepal and Japan emerged as the largest donor to Nepal providing assistances to various infrastructures project to the latter.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Nepal also marked a remarkable shift in the nature of foreign assistant from the trend of grants into "soft loans after the full operation of the Asian Development Bank and World Bank Group in in 1970 AD.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                At present, there are around 275 INGOs operating in Nepal which was even higher to support the relief and reconstruction projects.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                In regard of the bilateral support, Nepal has been receiving support from the government of Australia, China, Denmark, Finland, Germany, India, Japan, Korea, the Netherlands, Norway, Switzerland, USA, UK, European Union etc. Out of them, USAID disbursed the highest amount in the last fiscal among bilateral donors which was worth $134.06 million followed by United Kingdom at $128.31 million. Japan including Japan International Cooperation Agency disbursed $77.65 million, India provided $59.26 million and China disbursed $41.24 million.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Whereas in regard of the multilateral donors Nepal has been receiving support from the Asian Development(ADB), European Union(EU), Food and Agriculture Organization(FAO), Global Fund to Fight AIDS, Tuberculosis and Malaria, International Labor Organization(ILO), SAARC Development Fund, United Nations Development Program(UNDP), World Band Group etc.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                According to the The Himalayan Times Daily dated 1st January 2018, the World Bank Group disbursed the highest amount among multilateral development partners which stood at $345.97 million, followed by Asian Development Bank at $253.9 million. The UN country team disbursed $120.73 million and the European Union provided $83.89 million. Of the total foreign aid disbursed in the last fiscal, 51.4 per cent or $716.78 million was spent on national level programmes and the remaining for district level programmes.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                The prevalence of the support from those bilateral and multilateral agencies as well as INGOs would not have been possible if the Government of Nepal would not have had developed conducive policy environment to invite more foreign aid into the country. The first ever policy; the Loan and Guarantee Act in 1958 followed by the Foreign Aid Policy 2002 which was later substituted by the Development Cooperation Policy 2014 AD were developed and tailored keeping the changing trends of values and priorities of the aid agencies to invite more resources into Nepal. More the the national policy and priorities set by National Planning Commission and the Ministry of Finance are the keys to mobilize the foreign aid.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                importantly, the article 59(6) and schedule 5(5) of the Constitution of Nepal, 2015 AD has also ensured provisions to mobilize foreign aid from multilateral and bilateral development partners including I/NGOs. Furthermore, according the the schedule 6(2) of the Constitution, State Government has also an authority to obtain foreign grant and assistance from various development partners with consent of Federal Government of Nepal.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                In addition to the favorable policy environment Nepal has also empowered civil society organizations and passionate new elected people representatives at the Federal, Provincial and Local level to speed up and sustain the development works and impact. Therefore on the basis of my 14 years long experiences in development sector, I can say that Nepal can ensure proper policy environment, ownership, transparency and accountability towards the projects and the development partners. So I also like take an opportunity to urge development partners, donors, and philanthropists to invest in Nepal socio economic issues. This will also be an ideal for donors to help Nepal in achieving the SDG by 2030 and help Nepal in graduating from the list of least developed countries. .
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                However, to ensure a trust and support of development partners and Nepal also have to develop and implement the foreign aid strategies in line with the changing global priorities. Similarly, Nepal should also achieve the SDGs, by 2030. Likewise, Nepal also have to be cautious in reducing the aid fragmentation and transaction cost in federal structure as the number of local government has increased. Alike, the responsible authorities should also develop a progress measuring mechanism to track the foreign aid's effectiveness and its impact and promote the ownership, accountability and transparency of the resources.
                            </p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Last but not the least, the Government of Nepal should also be able to show case the need of grass roots issues cum need among in the international donors communities and work in bottom up approach.
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
