"use client";
import React from "react";

const WhatWeDoPage: React.FC = () => {

  const ecosystemServices = [
    {
      title: "Building Knowledge through Research & Documentation",
      description:
        "We aim to support the civil society ecosystem through data-led research and knowledge on financing trends, indigenous giving practices, CSR and ESG policies, and cross-border giving. Our findings aim to power policy dialogue, advocacy, and sector planning, while our documentation of traditional philanthropic values will boost that Nepal’s giving heritage."
    },
    {
      title: "Facilitating Multi-Stakeholder Dialogue",
      description:
        "We create spaces for open dialogue between government, philanthropy, CSOs, donors, and the private sector. These convenings promote alignment with national development priorities, foster cross-sectoral learning and exchange, lay foundations for multi-stakeholder partnerships, and foster shared accountability for development and change."
    },
    {
      title: "Recognizing Unsung Philanthropists and Community Champions",
      description:
        "NCPD honors local changemakers whose impactful efforts often go unnoticed. By celebrating these individuals, we foster a culture of giving, volunteerism, and community-driven leadership."
    }
  ];

  const supportServices = [
    {
      title: "Capacity Building for Impact",
      description:
        "Through tailored training, we help CSOs and philanthropic organizations build core competencies in strategic fundraising, story telling, donor engagement, evidence-based proposals, and impact reporting. Our capacity-building programs are tailored to enhance visibility, accountability, and effectiveness."
    },
    {
      title: "Trust and Accreditation",
      description:
        "We are launching Trust & Accreditation Program to build public and donor confidence in Nepal’s CSOs and philanthropic initiatives. This initiative ensures quality assurance, governance transparency, and operational credibility, helping organizations gain the trust they need to grow."
    },
    {
      title: "Fundraising & Resource Mobilization Support",
      description:
        "NCPD supports NGOs and philanthropic organizations in identifying grants, scoping donors, and developing fundraising strategies. We also assist in forging long-term partnerships through strategic matchmaking and proposal refinement."
    },
    {
      title: "Impact Assessment Support",
      description:
        "We assist CSOs in conducting monitoring and evaluation—helping them articulate both outcomes and impact. Our services include support for baseline, midline, and endline assessments, as well as learning-oriented evaluations."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
          What We Do
        </h1>

        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          We believe that a vibrant, effective civil society and philanthropy is essential for inclusive and lasting development rooted in local action and community leadership. We work to strengthen the capacity, credibility, and connectivity of civil society and philanthropic organizations and champions across Nepal and also internationally equipping them to drive change with trust, impact, and resilience.
        </p>

        {/* Ecosystem Section */}
        <div className="mb-20">

          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Ecosystem and Network Strengthening
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Direct Support Section */}
        <div>

          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Direct Support for Philanthropy and Civil Society Organizations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeDoPage;