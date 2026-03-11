"use client";

import { useState } from "react";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const team = [
  {
    name: "Rewati Raman Dhakal",
    title: "Founder",
    image: "/team/rewati.jpg",
    bio: `Rewati Raman Dhakal is the founder of the Nepal Center for Philanthropy and Development (NCPD), dedicated to strengthening local non-profit organizations in Nepal. The founding of NCPD was inspired by his long-standing commitment to community service and his belief in the power of local leadership to drive social transformation.

Rewati’s journey in the social and development sector began in his youth as a community volunteer. Over the years, he has worked with several prominent national and international organizations including UN and International Federation of Red Cross and Red Crescent Societies (IFRC) in Nepal and across the MENA (Middle East and North Africa) region.

He has worked extensively across Nepal, directly engaging with communities in over 65 districts; often in remote and underserved areas. These field visits have given him in-depth insight into the urgent needs of Nepal’s most vulnerable communities.

Believing that sustainable change requires collective effort and perseverance, Rewati remains deeply committed to the vision of a more just, inclusive, and compassionate society through collaborative philanthropy and empowered local action.`,
  },

  {
    name: "Bishal Rai",
    title: "Director",
    image: "/team/bishal.jpg",
    bio: `Bishal Rai brings a wealth of experience in project management, capacity building, and organizing national and international convenings. Bishal is passionate about fostering multi-stakeholder collaboration and enjoys building partnerships among the public sector, private sector, and philanthropic organizations to achieve shared and collective goals.`,
  },

  {
    name: "Jerry Clewett",
    title: "International Development Consultant",
    image: "/team/jerry.jpg",
    bio: `Jerry Clewett is an experienced International Development Consultant with a career spanning over two decades in various global development initiatives. His expertise includes program evaluation, institutional strengthening, and cross-cultural partnership building.

At NCPD, Jerry provides invaluable insights into international best practices in philanthropy and civil society development, helping to benchmark and elevate the organization's programs. He advises on strategies to attract international funding and to build sustainable relationships with global partners, thereby broadening the reach and impact of NCPD's work.`,
  },

  {
    name: "Dr. Christian Gahrmann",
    title: "Philanthropy & Fundraising Expert",
    image: "/team/christian.jpg",
    bio: `Dr. Christian Gahrmann is a renowned expert in philanthropy and fundraising, with extensive academic and practical experience in the field. He specializes in innovative fundraising strategies, donor engagement, and impact measurement for non-profit organizations.

As a consultant for NCPD, Dr. Gahrmann provides specialized training and technical assistance to help organizations diversify their funding sources and improve their financial sustainability. His insights are crucial in guiding NCPD's research into effective giving models and in developing cutting-edge capacity-building programs for the philanthropic sector.`,
  },

  {
    name: "Sharad Chandra Neupane",
    title: "Development Expert",
    image: "/team/sharad.jpg",
    bio: `Sharad Chandra Neupane is a seasoned Development Expert with a strong background in policy analysis, community engagement, and sustainable development. He contributes to NCPD by conducting research on the socio-economic factors influencing philanthropy in Nepal and by developing policy recommendations for a more supportive regulatory environment.

Sharad is deeply involved in dialogue initiatives that bring together government, civil society, and the private sector to discuss and advance philanthropic goals. His commitment to evidence-based approaches strengthens NCPD's advocacy efforts and its overall impact on national development.`,
  },

  {
    name: "Manisha Shah Nayyar",
    title: "Philanthropy & Partnerships Specialist",
    image: "/team/manisha-shah-nayyar.jpg",
    bio: `Manisha Shah Nayyar (she/her) is a seasoned social sector professional with over a decade of experience in fostering multi-stakeholder partnerships, conducting research and policy advocacy, and advancing grant making and philanthropy. She has worked with both international and domestic organizations, and currently leads Global Philanthropists Circle network across Asia at Synergos.

Originally from Nepal and currently based in Bengaluru, India, Manisha is deeply committed to contributing to Nepal’s development through domestic and international philanthropic efforts, particularly in the areas of education, climate and environment, and strengthening civil society action.`,
  },

  {
    name: "Arti Lad",
    title: "Learning, Strategy & Participation Specialist",
    image: "/team/arti-lad.jpg",
    bio: `A values-driven and results-oriented Learning, Strategy & Participation Specialist with 9 years of experience across international development, social impact, and the private sector, translating evidence, systems insight and lived experience into strategic decision-making and adaptive delivery. She works at the intersection of participatory learning and strategy – designing processes that enable organisations and teams to reflect, make sense of complex information, adapt, and deliver more equitable and effective programmes in real time.

Her work focuses on transforming insight into action: facilitating learning systems, synthesising qualitative and quantitative evidence, and co-creating participatory approaches. She combines participatory monitoring, evaluation & learning, social and behaviour change methods, strategic communications, and a gender lens to strengthen accountability, inclusion, and impact in complex operating environments and social systems.

She has supported interdisciplinary cross-sector initiatives across Sub-Saharan Africa, South Asia, and fragile and conflict-affected contexts for FCDO, EU, USAID and philanthropic partners, with a focus on gender equality, social norm change, and systems strengthening.`,
  },
];

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-10 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900">
          Team
        </h1>

        <h2 className="text-2xl font-semibold text-blue-900 mt-6">
          Meet the Team
        </h2>

        <p className="text-gray-600 mt-2">
          We are a growing team of changemakers with global and local expertise.
        </p>
      </section>

      {/* Team Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-blue-800">
                {member.name}
              </h3>

              <p className="text-gray-600 mb-4">{member.title}</p>

              <button
                onClick={() => setSelectedMember(member)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Full Bio
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full rounded-xl p-6 overflow-y-auto max-h-[80vh] relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl"
            >
              ✕
            </button>

            <img
              src={selectedMember.image}
              className="w-28 h-28 rounded-full mx-auto object-cover mb-4"
            />

            <h3 className="text-2xl font-semibold text-center text-blue-900">
              {selectedMember.name}
            </h3>

            <p className="text-center text-gray-600 mb-4">
              {selectedMember.title}
            </p>

            <p className="text-gray-700 whitespace-pre-line">
              {selectedMember.bio}
            </p>
          </div>
        </div>
      )}
    </>
  );
}