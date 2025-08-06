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
        imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
        link: '/donating-properties-and-selling-medals-for-fundraising-and-sustainability-of-nat',
    },
    {
        id: 8,
        title: 'Philanthropy and Fundraising Conference Successfully Held in Nepal',
        imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
        link: '/philanthropy-and-fundraising-conference-successfully-held-in-nepal',
    },
    {
        id: 9,
        title: '1st National Philanthropy and Fundraising Conference in Nepal',
        imageUrl: '/home/Trend-Nepal-Foreign-Aid-Mobilization.jpeg',
        link: '/1st-national-philanthropy-and-fundraising-conference-in-nepal',
    },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 mt-20">
      <Head>
        <title>Philanthropy in Nepal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Philanthropy in Nepal</h1>
          
          {/* Breadcrumbs */}
          <nav className="mt-2 text-sm text-black">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:underline">News</Link>
            <span className="mx-2">/</span>
            <span className="text-red-800">Philanthropy in Nepal</span>
          </nav>
        </header>

        {/* Main Content and Sidebar Layout */}
        <main className="lg:flex lg:space-x-8">
          
          {/* Main Content Section */}
          <div className="lg:w-2/3">

            {/* Article Meta and Content */}
            <div className="p-6">
              <span className="block text-sm text-black mb-4">23 May, 2024</span>
              <h1 className="text-black leading-relaxed mb-4 text-lg font-bold">Philanthropy in Nepal</h1>
              <h1 className="text-black leading-relaxed mb-4 text-lg font-bold">“From Traditional Practices to Modern Trends and Challenges of Philanthropy in Nepal”</h1>
              <p className="text-black leading-relaxed mb-4 text-lg">
                Philanthropy is of great importance in Nepali society and reflects commitments deeply rooted in the country’s diverse religious and cultural landscape. Growing ownership and motivation of people to solve common societal problems has also been a key element for increased philanthropic activities in Nepal. While much of the philanthropic activity is informal, the number of philanthropic organizations has recently grown, and they are actively engaged in various types of philanthropic work. This blog post provides insights into traditional practices, modern trends, challenges, and recommendations for philanthropy in Nepal, among individuals and organizations.
                </p>
                <h1 className="text-black leading-relaxed mb-4 text-lg font-bold">Faith, Culture, and Traditions</h1>
              <p className="text-black leading-relaxed mb-4 text-lg">
                The major faiths of Hinduism, Buddhism, and Islam each contribute to a wide range of altruistic practices, exemplified by the cultural traditions of daan (donations), zakat (almsgiving), and bhiksha (food given as alms). About 81.19% of the Nepali population <span className="text-primary"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftn1"}>[1]</Link></span> identifies as Hindu, and the Hindu act of giving, known as “Daan,” plays a major role in society. It has greater significance than either chanting mantras, performing Yajna (ritual done in front of sacred fire), performing pilgrimages or fasting in achieving dharma (fulfillment of religious and moral duties) and alleviating sins. Daan is also carried out during religious events and has significantly contributed in carrying out philanthropic projects. Among the various forms of giving, Tula Daan (scale donation) is one of the unique customs in Nepal. While Tula Daan is rarely observable to the public eye, it involves individual donations of specific items equal to the giver’s body weight, such as grain or other items available within their income. Tula Daan was initially associated with deterring adverse planetary effects and achieving religious goals, but it has evolved in recent years to include contributing to social objectives. Modern examples include individuals donating their weight in books to support local libraries or people donating coins or cash to support orphanages, hospitals, schools, and community projects.
                </p>
                <h1 className="text-black leading-relaxed mb-4 text-lg font-bold">Philanthropist Recognized as National Hero</h1>
              <p className="text-black leading-relaxed mb-4 text-lg">
                As we reflect on the history of Nepalese philanthropy and recognition of philanthropists, a special honor is given to Mr. Sankhadhar Sakhwa. Sakhwa is considered to be a benevolent figure. During the reign of Licchavi king Ananda Dev (879 AD), he liquidated the debts of the Nepalese people and ushered in a new era known as Nepali Sambat, a transformative act. Notably, the Government of Nepal officially named Sankhadar Sakhwa as one of the national heroes of Nepal on November 18, 1999 (B.S. 2056-08-02). Additionally, on November 26, 2023, the Postal Service issued a commemorative stamp featuring his likeness to highlight the lasting impact of his philanthropic legacy.<span className="text-primary"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftn2"}>[2]</Link></span>
                </p>
                <h1 className="text-black leading-relaxed mb-4 text-lg font-bold">Nonprofit Organizations</h1>
              <p className="text-black leading-relaxed mb-4 text-lg">
               In the 19th century, philanthropy and philanthropic activities flourished in Nepal. The devastating 1934 earthquake led to the emergence of relief services, mainly through organizations such as the Bukampa Sewa Dal (Earthquake Services Group) and the Bukampa Relief Organization. Subsequently, with the restoration of democracy in 1990, the landscape of philanthropic organizations experienced significant growth. <span className="text-primary"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftn3"}>[3]</Link></span> Until 1987, approximately 40 philanthropic organizations were registered in Nepal; this number was partially low because it was unlawful for anyone to engage in social development activities without the permission of the then Panchayat regime.
               </p>
              
              <p className="text-black leading-relaxed mb-4 text-lg">
                As of 15th July 2020, the number of philanthropic organizations affiliated with the Social Welfare Council (SWC) were 51,513, out of which, around 7,000 are reported as active. The regulatory framework for these organizations is the Association Registration Act 1977, which is uniformly applied across 77 districts of Nepal. The federal constitution empowers local government authorities to develop policies to regulate philanthropic organizations at the grassroots level.
                </p>
                <p className="text-black leading-relaxed mb-4 text-lg">People willing to register a philanthropic organization need to provide the funder’s police report. This is required to demonstrate a clean criminal history; however, it is not mandated by the Association Registration Act. Additional required information includes details on financial sources, an office address, contracts of official space, and copy of citizenship certificate for each member. Philanthropic organizations must renew their registration annually at the District Administration Office (DAO) and every three years at the Social Welfare Council (SWC). Those failing to comply for five consecutive years will be delisted.
                  </p>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  Renewal of philanthropic organizations requires a copy of the organization’s constitution, a financial audit report, meeting minutes of the annual general assembly, a renewal certificate of the auditing company engaged in financial auditing, an auditor’s tax clearance, and recommendations from municipal or rural wards where projects are implemented. The process sounds very obvious, but it is time consuming and bureaucratic. In response to the challenges posed by the protracted and bureaucratic nature of this process, there is also a growing trend in Nepal toward the registration of profit-not-distributing companies at the office of the Company Registrar. This type of organization can affiliate with the Social Welfare Council and also legitimate to receive national and international grants of carrying out their organizations objectives. Nevertheless, notable improvements have been observed within the philanthropic landscape. According to the Doing Good Index 2022 by the Center for Asian Philanthropic Studies (CAPS), Nepal’s philanthropic environment transitioned from a state of “Not Doing OK” in 2021 to “Doing OK” in 2022, signifying positive advancements in the sector.
                </p>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  The Industry and Enterprise Act (IEA) of 2018 shapes philanthropic endeavors within the private sector. Mandating private enterprises to allocate a minimum of 1 percent of their net profit to charitable initiatives in Nepal, this practice is gradually gaining traction. Despite this, there is a dearth of comprehensive studies tracking the volume of Corporate Social Responsibility (CSR) funds dedicated by companies. Meanwhile, most of the prominent private enterprises tend to engage in philanthropic activities by establishing their own philanthropic wings. Others opt to give to other philanthropic causes. Moreover, private sector entities contribute significantly to the Prime Minister’s fund to address humanitarian crises during emergencies.
                </p>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  Both individuals and companies in Nepal exhibit a pronounced inclination to contribute to causes mostly centered on children, women, education, disabilities, and health. Notably, there is also a growing awareness and sense of responsibility towards environmental and climate issues. The expanding middle-class population in the country presents an opportunity for philanthropic organizations to attract donations. However, the current tax incentive framework is not particularly motivating. As per the Income Tax Act of 2002, individuals are permitted a deduction for donations to approved institutions (such as those dedicated to education, religion, and social causes) and up to a limit of 5 percent of their adjusted taxable income, with a cap of NPR 100,000 (approximately $750). This provision underscores the potential for enhancing tax incentives to further encourage philanthropic giving in the country.
                </p>
                 <p className="text-black leading-relaxed mb-4 text-lg">
                  Philanthropic organizations have significantly contributed to Nepal’s development. However, the emergence of COVID-19 has had a major impact on it.  Philanthropic organizations faced a dual challenge during the crisis. On the one hand, the demand for their services and support increased significantly, but on the other hand, the national lockdown restricted considerably their movement. Given the impact of the pandemic, three out of 10 organizations had to shut down their services altogether. Relatively low-budget philanthropic organizations operating outside the Kathmandu Valley showed greater vulnerability and concerns than philanthropic organizations within the Kathmandu Valley. In addition, philanthropic organizations faced the challenge of charting future paths for funding, planning financial scenarios, and implementing technical training to improve organizational resilience. Therefore, there is a recognized need for support to address these aspects to ensure the sustainable effectiveness of philanthropy. <span className="text-primary font-bold"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftn4"}>[4]</Link></span>
                 </p>
                 <p className="text-black leading-relaxed mb-4 text-lg">
                  The opportunity for philanthropic organizations to raise funds digitally has grown after the progress of the online banking system, mainly during the COVID era. They use online payment gateways for domestic fundraising and different overseas’ crowdfunding sites to raise funds from individuals abroad.  Unfortunately, at a time when global practices include the use of digital fundraising, AI, and cryptocurrencies for philanthropic transactions, Nepal’s donation policy lags behind current trends. It fails to promote an environment for giving. The current Donations Act 1973 requires philanthropic organizations to obtain approval from concerned government agencies before participating in public fundraising activities. Philanthropic organizations heavily depend on international donors, given the absence of supportive giving policies and diminishing trust in such organizations. At present, an estimated 70 percent of funding comes from international sources.
                 </p>
                 <p className="text-black leading-relaxed mb-4 text-lg">
                  Notably, the current legal framework allows Nepali philanthropic organizations to receive cross-border charitable donations, subject to prior approval from the relevant government authorities. However, there are restrictions on remittances and international donations. To receive foreign funding, philanthropic organizations in Nepal must affiliate with the Social Welfare Council (SWC) and obtain approval for individual projects, which further adds to the regulatory environment surrounding philanthropy.
                 </p>
                 <h1 className="text-black leading-relaxed mb-4 text-lg font-bold">Recommendations</h1>
              <p className="text-black leading-relaxed mb-4 text-lg">
                In light of the increasing social challenges, the expanding role of philanthropic organizations stands as a critical force. The heightened responsibility requires additional resources, including foreign funding and intensive local resource mobilization. Therefore, the imperative now lies with the government of Nepal to cultivate an enabling environment. This imperative involves crafting and endorsing suitable policies for the philanthropic sector and creating a conducive atmosphere for cross-border giving and domestic resource mobilization.
                </p>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  Simultaneously, enhancing transparency, accountability and impact by philanthropic organizations becomes paramount to earning the trust of beneficiaries, donors, government, and other stakeholders.
                </p>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  Similarly, persevering and promoting indigenous philanthropic practices is equally crucial for the development and sustainability of the philanthropic sector in Nepal.
                </p>
                <h1 className="text-black leading-relaxed mb-4 text-lg font-bold">Footnotes</h1>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  <span className="text-primary font-bold"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftnref1"}>[1]</Link></span> National Population and Housing Census 2021, National Report on Caste/Ethnicity, Language and Religion, Government of Nepal, Office of the Prime Minister and Council of Ministers, National Statistics Office.
                </p>
                <p className="text-primary font-bold leading-relaxed mb-4 text-lg"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftnref2"}>[2]</Link> Sankhadhar Sakhwa</p>
                <p className="text-black leading-relaxed mb-4 text-lg"><span className="text-primary font-bold"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftnref3"}>[3]</Link></span> Anil Kumar Sinha and Sapna Pradhan Malla. “Trade, Tourism, Investment and Philanthropy in Nepal: Philanthropy and Law in Nepal.” CFFN – Nepal Trade and Tourism. <span className="text-primary font-bold">CFFN – Nepal Trade and Tourism.</span></p>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  <span className="text-primary font-bold"><Link href={"https://blog.philanthropy.indianapolis.iu.edu/2024/01/31/philanthropy-in-nepal/#_ftnref4"}>[4]</Link></span> Dipendra KC, Bijaya Bhandari, Jaya Jung Mahat (May 2020). “Impact of Covid-19 on Nepali Civil Society Organizations” -Thammasat University, School of Global Studies.
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
