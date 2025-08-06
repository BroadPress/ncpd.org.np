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
                <title>Donating Properties, and Selling Medals for fundraising and sustainability of National Innovation Center in Nepal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Main Container */}
            <div className="container mx-auto px-4 py-8">

                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-900">Donating Properties, and Selling Medals for fundraising and sustainability of National Innovation Center in Nepal</h1>

                    {/* Breadcrumbs */}
                    <nav className="mt-4 text-sm text-black">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/news" className="hover:underline">News</Link>
                        <span className="mx-2">/</span>
                        <span className="text-red-800">Donating Properties, and Selling Medals for fundraising and sustainability of National Innovation Center in Nepal</span>
                    </nav>
                </header>

                {/* Main Content and Sidebar Layout */}
                <main className="lg:flex lg:space-x-8">

                    {/* Main Content Section */}
                    <div className="lg:w-2/3">
                        <div className="relative rounded-lg overflow-hidden mb-6">
                            {/* Using a placeholder image since the original URL is not provided */}
                            <Image
                                src="/home/mahabir-pun.jpg"
                                alt="Donating Properties, and Selling Medals for fundraising and sustainability of National Innovation Center in Nepal"
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
                                Dr. Mahabir Pun is well known for mainstreaming information and technology with community development works. He has brought phenomenal changes in the lives of people and communities of approximately 200 rural mountainous villages of Mid Western districts of Nepal. People of those areas were privileged of information and technology in the mid of 2000 AD at least one and a half decade prior than other rural parts of Nepal.</p>

                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Teaching-learning improvised through Pun’s “teleteaching”, good teachers in one school now instruct students in others. Local health workers use Wi-Fi to consult the specialists in cities, students learn global skills by surfing the net and villagers e-market local products such as buffaloes cheese, honey, and teas. Also, they are drawing more trekkers to their houses by offering them internet services. Similarly, in parallel projects, Mahabir has helped villagers to use solar power for energy needs, people of Nangi have added a library, health clinic, and new high-school classrooms.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Currently, Mahabir Pun is leading the National Innovation Centre(NIC), to foster research for the economic development of Nepal. NIC seems very very ambitious but Pun says "Vision will only be wishes if we don't work on it".</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Few days before, MangoPost's Chief Editor Mr. Rewati Raman Dhakal had an opportunity to dig deeper with Dr. Pun to know more about his contribution, future projects, and fundraising and strategies plan.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Here’s the excerpt:</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">
                                Could you kindly share us about the National Innovation Center (NIC)?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                National Innovation Center is a platform committed to nurturing the most talented and innovative young generation of Nepal to develop something. It also helps them to become entrepreneurs so they can contribute to the economic development of the nation.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Primarily, we support to achieve economic development through innovation because we believe economic development as a cornerstone of national development.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">
                                What motivated you to initiate the National Innovation Center?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Based on my nearly 30 years of experience in community development, I knew that the charity model community works can only ease the lives of people and communities. But it requires innovation and enterprises for economic development of Nepal.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                Therefore, the pursuit of nation building through innovation, enterprises and economic development motivated me to initiate the National Innovation Center in 2012.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                seriously, Nepal imports more than 90% of products and exports less than 10% of products to earn foreign currencies resulting in the huge trade deficit. Therefore a major economic overhaul is required to make Nepal a developed country in the 21st century. For that to happen, Nepal must give the highest priority to science, technology creation, and innovation in order to ensure a sustainable base for socio-economic development of Nepal. </p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">
                                What are the ongoing and successful projects of the National Innovation Center(NIC)?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">
                                National Innovation Center was just started a few years back therefore; we do not have any final outcome. However, we are working on the 15 key projects which are in several stages of development including medical drone, baby in incubators, milking machine, water filter, solar thermal collector, feed for poultry and agriculture tools across Nepal.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">
                                How many innovative young people are working at the National Innovation Centers (NIC) across Nepal?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">At this moment we have 45 young innovators working across Nepal.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">The growth and development of the National Innovation Center (NIC) rely on the young innovators whereas there is a huge brain drain problem in Nepal. Therefore, does the brain drain pose any serious challenge to NIC?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">This is the main challenge of National Innovation Center. But we cannot stop the brain drain overnight unless and until we create environment and opportunities for them.
                                <br />
                                But, if we persistently work for 20-30 years to promote innovation, enterprise and economic development we can decrease the brain drain in a significant amount.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">It is said that at least one generation has to sacrifice to transform a nation, considering that, don’t you want to stop youths from brain drain and migration?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">I wish youth would stay in our own country. But we cannot stop them unless we provide a conducive environment and opportunities for them. So, at this moment I am focused towards 1% of young innovators who are in countries and if reared and honed for innovation can create opportunities for rest of the 99% of the youths in Nepal.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">You are heading a National Innovation Center and putting rigorous efforts. Could you tell us if it is your passion or your sacrifice of your golden time and resources?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">I am following my passion, so it's not about any types of sacrifice. I am translating my commitment which I had made 30 years back when I graduate from the university in the United States.

                                had committed that; I would never go for jobs and do not pursue something that would only generate benefits to me and not to my society. Hence, I am following my passion.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">How big would be the structure and the volume of resources needed for the future of the National Innovation Center?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">Sorry! No one of us can answer it rightly. Because nobody knows what would be the number of young innovators coming in and presenting the ideas and the volume of resources they might need.
                                <br />
                                In other hands, it is also not a time-bound project rather it’s a long term project which goes from generation to generation.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">But shouldn't NIC develop a resources development and sustainability plan presuming the potential proposal coming into the NIC in future?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">Fundraising and sustainability are the very important aspects to NIC as well. Therefore, along with the innovation projects we are also at the same time working for these issues.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">What are the ideas and action was taken so far for the sustainability of the NIC?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">To be honest, 50% of my mind thinks about fundraising and sustainability issues and ideas for NIC. We are in the plan of launching a software company, herb soft drinks, and 10 megawatts of hydropower which will generate income for daily operation and future sustainability of NIC too.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">How much donations you have been successful to raise so far?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">We have been able to raise approximately $ 7 lakh (seven lakh USD). We have received donations from individuals who are mostly individuals living in Nepal and abroad. We have also received commitment and good faith but not received any financial support from the government of Nepal and significant support from the private sectors and big institutional donors to date.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">How could interested people and organization donate to NIC?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">They are requested to deposit in our bank account, and/or also visit NIC's office at the premises of the Tribhuvan University at Kritipur in Kathmandu, Nepal. They are also requested to visit our website www.nic.org.np for details.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">Is it true that you donated your properties and also posted all the prestigious awards you have had received for auction? If yes, why did you do that?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">Yes, I have donated 28 ropanis(1.4 hectors) of land I own in Pokhara in Nepal. I am selling the land and also the medals to supplement the budget required to develop a capital to start a 10 Megawatt hydropower. I have put all the prestigious awards and medals I was given and I wish I could get 1 million US dollar from selling land and awards. This will be very much helpful to generate long term income and sustainability of NIC.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">What were the main medals you received and put for auction?</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">I was honored with the Ramon Magsaysay (Asia's Nobel Prize), Rastra Deep, Dr. Harka Gurung Mountaineering Award, International Hall of Fame and the University of Nebraska Honor Award.
                                <br />
                                And all of these awards have been put for auction from August 31 until October 15, 2018.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg font-bold">You are donating and sacrificing everything valuable you have, will it motivate or de-motivate to your's followers.</p>
                            <p className="text-black leading-relaxed mb-4 text-lg">I am doing it for a common good. Therefore, it is better if my friends, well-wishers, and patron would take it positively. It is not even disrespecting to those prestigious organizations that have respect for my efforts.</p>
                            <div className="relative rounded-lg overflow-hidden mb-6">
                                {/* Using a placeholder image since the original URL is not provided */}
                                <Image
                                    src="/home/mahabir-pun.jpg"
                                    alt="Workshop on SDG Progress Review and Roles of Stakeholders"
                                    width={900}
                                    height={500}
                                    layout="responsive"
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="text-black leading-relaxed mb-4 text-lg">Dr Mahabir Pun with students visiting the National Innovation Center for learning Purpose at Kirtipur, Kathmandu, Nepal

                            </p>
                            <div className="relative rounded-lg overflow-hidden mb-6">
                                {/* Using a placeholder image since the original URL is not provided */}
                                <Image
                                    src="/home/mahabir-pun1.jpg"
                                    alt="Workshop on SDG Progress Review and Roles of Stakeholders"
                                    width={900}
                                    height={500}
                                    layout="responsive"
                                    className="rounded-lg"
                                />
                            </div>
                            <p className="text-black leading-relaxed mb-4 text-lg">Dr Mahabir Pun at the project site after establishing devices in rural Nepal   </p>
                        <p className="text-black leading-relaxed mb-4 text-lg font-bold">Do you have any message to individual and organizations?</p>
                        <p className="text-black leading-relaxed mb-4 text-lg">Nepal's development is only possible if we pay considerable attention to nurture homegrown inventors, innovators and scientists for the economic development to happen. If we fail to do so, many of the talented, innovative and creative Nepalese will leave the country every year in search of better careers and opportunities abroad.</p>
                        <p className="text-black leading-relaxed mb-4 text-lg">This would be an irreparable loss for a poor country like Nepal and remain as a least developed country. Therefore, it is a high time to intervene collectively to keep those talented and creative people and use their talents for the economic development of Nepal through institutions like Nepal Innovation Center.</p>
                        <p className="text-black leading-relaxed mb-4 text-lg">Hence, my sincere and deepest urge to all of you is to join the initiatives of the NIC in nation-building. They are requested to make their level contribution in terms of time, talent and treasure.</p>
                        <p className="text-black leading-relaxed mb-4 text-lg">We also like private sectors including banks to provide support and collaborate with us as they have the policy of CSR and directives from Nepal Rastrya Bank to allocate at least 1% of net profit in a social cause.

</p>
                        <p className="text-black leading-relaxed mb-4 text-lg">We also like to appeal to rich and generous individuals to provide donation to NIC and we are ready to name the NIC after them and also recognize them in best possible ways.</p>
                        <p className="text-black leading-relaxed mb-4 text-lg">(Published  on <span className="text-primary font-bold"><Link href={"http://www.mangopost.org"}>http://www.mangopost.org </Link></span>dated 2019.04.10)</p>
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
