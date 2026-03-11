"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LogoSection from "@/components/ui/logo";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Rewati Raman Dhakal",
    title: "Founder",
    image: "/about/RewatiRamanDhakal.png",
    bio: `Rewati Raman Dhakal is the founder of the Nepal Center for Philanthropy and Development (NCPD), dedicated to strengthening local non-profit organizations in Nepal. The founding of NCPD was inspired by his long-standing commitment to community service and his belief in the power of local leadership to drive social transformation.

Rewati’s journey in the social and development sector began in his youth as a community volunteer. Over the years, he has worked with several prominent national and international organizations including UN and International Federation of Red Cross and Red Crescent Societies (IFRC) in Nepal and across the MENA (Middle East and North Africa) region.

He has worked extensively across Nepal, directly engaging with communities in over 65 districts—often in remote and underserved areas. These field visits have given him in-depth insight into the urgent needs of Nepal’s most vulnerable communities.

Believing that sustainable change requires collective effort and perseverance, Rewati remains deeply committed to the vision of a more just, inclusive, and compassionate society through collaborative philanthropy and empowered local action.`,
  },

  {
    name: "Manisha Shah Nayyar",
    title: "Philanthropy Leader",
    image: "/about/ManishaShahNayyar.png",
    bio: `Manisha Shah Nayyar (she/her) is a seasoned social sector professional with over a decade of experience in fostering multi-stakeholder partnerships, conducting research and policy advocacy, and advancing grant making and philanthropy. She has worked with both international and domestic organizations, and currently leads Global Philanthropists Circle network across Asia at Synergos.

Originally from Nepal and currently based in Bengaluru, India, Manisha is deeply committed to contributing to Nepal’s development through domestic and international philanthropic efforts, particularly in the areas of education, climate and environment, and strengthening civil society action.`,
  },

  {
    name: "Arti Lad",
    title: "Learning, Strategy & Participation Specialist",
    image: "/about/ArtiLad.png",
    bio: `A values-driven and results-oriented Learning, Strategy & Participation Specialist with 9 years of experience across international development, social impact, and the private sector, translating evidence, systems insight and lived experience into strategic decision-making and adaptive delivery.

She works at the intersection of participatory learning and strategy – designing processes that enable organisations and teams to reflect, make sense of complex information, adapt, and deliver more equitable and effective programmes in real time.

Her work focuses on transforming insight into action: facilitating learning systems, synthesising qualitative and quantitative evidence, and co-creating participatory approaches.

I combine participatory monitoring, evaluation & learning, social and behaviour change methods, strategic communications, and a gender lens to strengthen accountability, inclusion, and impact in complex operating environments and social systems.

She has supported interdisciplinary cross-sector initiatives across Sub-Saharan Africa, South Asia, and fragile and conflict-affected contexts for FCDO, EU, USAID and philanthropic partners, with a focus on gender equality, social norm change, and systems strengthening.`,
  },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">

      {/* Header */}
      <header className="pt-36 pb-8 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <h1 className="text-5xl font-bold text-blue-900">Who We Are</h1>
      </header>

      {/* Who Are We */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6 text-gray-700 text-lg">

        <p>
          We are a group of highly driven social sector professionals from across the world who are tied by one common thread: our love for the beautiful country Nepal –home to the juggernaut Mount Everest, the warmest of communities, rich cultural heritage and diversity, and breathtaking nature in its purest forms. We have witnessed first-hand the difficulties in lives of people living here, the daily drudgery with no respite, and growing inequality with the prospering world.
        </p>

        <p>
          We are encouraged to build this support system for the civil society and philanthropic organizations by the sheer strength and might of people, the local leaders- willing to take charge, strengthen their communities, and build their future.
        </p>

        <p>
          We are on the path to make these stories of local change visible and enable the world to support these incredible leaders.
        </p>

      </section>

      {/* Vision */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            A trusted, inclusive, and well-informed philanthropic ecosystem in Nepal that bridges donors and doers, drives cross-sector collaboration, and unlocks the full potential of local and international giving and social investment for sustainable impact.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            Establish a trusted platform that connects donors with credible grassroots implementers, generates data-driven insights on Nepal’s social sector financing needs, and creates accessible pathways for structured and culturally rooted giving by 2030
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Core Values
        </h2>

        <p className="text-center text-gray-600 mb-8">
          We are guided by five core values in pursuing our mission
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          <div className="bg-white p-6 rounded-xl shadow">
            <strong>Integrity:</strong> We are committed to honesty and sincere adherence to the highest professional, moral, and ethical standards.
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <strong>Local Impact:</strong> We believe that philanthropic efforts should support and enhance meaningful work that serves the public good in ways that, whenever possible, are measurable and sustainable at the most local level.
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <strong>Inclusion:</strong> We value the full participation of communities and individuals and embrace the many forms of diversity, including, but not limited to, ethnic, cultural, racial, religious, sexual orientation, economic status, physical ability, and gender.
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <strong>Transparency and Accountability:</strong> We hold ourselves to the highest standards of organizational integrity and responsible stewardship, which require open, broad, and thorough disclosure of decisions, processes, and procedures.
          </div>

          <div className="bg-white p-6 rounded-xl shadow md:col-span-2">
            <strong>Collaboration and Partnership:</strong> We embrace sharing knowledge and taking collective action to strengthen all parties and effectively leverage resources to achieve common objectives.
          </div>

        </div>

      </section>

      {/* Team */}
      {/* <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Meet the Team
        </h2>

        <p className="text-center text-gray-600 mb-10">
          We are a growing team of changemakers with global and local expertise.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow">

              <img
                src={member.image}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-blue-800">
                {member.name}
              </h3>

              <p className="text-gray-600 mb-4">{member.title}</p>

              <button
                onClick={() => setSelectedMember(member)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Full Bio
              </button>

            </div>
          ))}

        </div>

      </section> */}

      <div className="mt-16">
        <LogoSection />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (

          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >

            <motion.div
              className="bg-white max-w-2xl w-full rounded-xl p-8"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex justify-between items-start mb-4">

                <h3 className="text-2xl font-bold text-blue-900">
                  {selectedMember.name}
                </h3>

                <button onClick={() => setSelectedMember(null)}>
                  <X />
                </button>

              </div>

              <p className="text-gray-700 whitespace-pre-line">
                {selectedMember.bio}
              </p>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  );
}