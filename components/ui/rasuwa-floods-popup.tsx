"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";


const priorityAreas = [
  "Shelter, resettlement and community recovery",
  "Livelihood restoration and economic recovery",
  "Protection and inclusion",
  "Mental health and psychosocial support",
  "Community infrastructure and essential services",
  "Strengthening the capacity of local and frontline organizations",
];

export default function RasuwaFloodsPopup({ label = "Read More" }: { label?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative inline-block overflow-hidden px-8 py-3 rounded-xl text-base font-medium text-white bg-primary w-full sm:w-auto mx-auto group text-center"
      >
        <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left z-0"></span>
        <span className="relative z-10">{label}</span>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-black/60 sm:p-4"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Standing With Nepal After the Rasuwa Floods"
              className="relative w-full max-w-6xl h-full sm:h-auto sm:max-h-[92vh] overflow-y-auto bg-gray-100 sm:rounded-xl shadow-2xl text-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button stays visible while the content scrolls */}
              <div className="sticky top-0 z-20 h-0">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-3 right-3 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold shadow hover:bg-blue-900 transition-colors"
                >
                  Exit
                </button>
              </div>

              {/* Photo */}
              <img
                src="/news/rasuwa-floods.jpg"
                alt="Families searching missing-person notices posted after the Rasuwa floods"
                className="w-full h-48 sm:h-64 md:h-80 object-cover object-center"
              />

              <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                  {/* Article */}
                  <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                      Standing With Nepal After the Rasuwa Floods
                      <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                    </h2>
                    <p className="text-sm text-gray-500 mt-4 mb-6">26 August 2026</p>

                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>The floods that swept through Rasuwa, Nuwakot, Dhading, Gorkha and Tanahun on 26 August 2026 have caused profound loss and disruption across affected communities. At the Nepal Center for Philanthropy and Development (NCPD), our thoughts are with the families who have lost loved ones, those still waiting for news of missing family members, and all those whose homes, livelihoods and communities have been severely affected.</p>
                      <p>We extend our deepest condolences to families who are grieving, our solidarity to those still searching for loved ones, and our wishes for a full and steady recovery to those who have been injured.</p>
                      <p>The scale of recovery ahead extends far beyond the restoration of physical infrastructure. Homes and settlements have been damaged or swept away, local markets and livelihoods disrupted, hydropower infrastructure affected, and important trade and transport links severed. Roads providing access to communities, cultural and religious sites, and important tourism destinations have also been disrupted, leaving some communities isolated.</p>
                      <p>Many affected families are currently living in temporary holding centres, community buildings, monasteries, temples, schools and other public facilities. Government authorities and humanitarian organizations are providing emergency assistance, including cash and rental support, to help families move into safer and more suitable temporary accommodation. While these measures are important for immediate safety and dignity, they are only an initial step towards recovery.</p>
                      <p>The transition from temporary accommodation to safe and sustainable homes will require integrated support covering shelter, land and settlement planning, livelihood restoration, protection, essential services, psychosocial wellbeing, infrastructure and community recovery. Decisions on resettlement and reconstruction will need to consider land safety and availability, access to livelihoods and essential services, connectivity, and the longer-term resilience of affected communities.</p>
                      <p>Recovery must also address the human impact of the disaster. The loss of homes, livelihoods and loved ones can have profound emotional and psychosocial consequences. Restoring dignity, social connections, hope and a sense of a viable future should therefore be an integral part of recovery planning.</p>
                      <p>NCPD is committed to supporting the Government of Nepal&apos;s recovery efforts in line with the Post-Disaster Needs Assessment (PDNA), while promoting the meaningful participation of local actors and communities.</p>
                      <p>As an organization working to strengthen philanthropy, local civil society and community-led development in Nepal, NCPD will seek to mobilize and work alongside capable local and frontline NGOs rooted in affected communities. Priority areas are listed alongside this article.</p>
                      <p>NCPD believes that the scale and complexity of recovery requires sustained collaboration among the Government, local authorities, affected communities, civil society organizations, humanitarian and development partners, the private sector and philanthropic actors. Connecting immediate assistance with longer-term recovery will be essential to help affected families move from temporary arrangements towards safe homes, restored livelihoods and resilient communities.</p>
                      <p>NCPD remains committed to contributing to a recovery process that is locally grounded, inclusive, dignified, collaborative and resilient.</p>
                      <p>Organizations, institutions, philanthropic actors and partners interested in learning more about the situation on the ground or exploring opportunities for collaboration are welcome to connect with NCPD.</p>
                      <p className="font-semibold text-gray-800 pt-2">
                        Nepal Center for Philanthropy and Development (NCPD)
                        <br />
                        <a href="http://www.ncpd.org.np/" className="text-blue-600 hover:underline font-normal">
                          www.ncpd.org.np
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <aside className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Priority Areas
                        <div className="w-12 h-1 bg-green-500 rounded-full mt-2"></div>
                      </h3>
                      <ul className="mt-4 space-y-3 text-gray-700 text-sm">
                        {priorityAreas.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Get in Touch
                        <div className="w-12 h-1 bg-green-500 rounded-full mt-2"></div>
                      </h3>
                      <div className="mt-4 space-y-2 text-sm text-gray-700">
                        <p><a href="mailto:info@ncpd.org.np" className="text-blue-600 hover:underline">info@ncpd.org.np</a></p>
                        <p><a href="tel:+9779842026513" className="text-blue-600 hover:underline">+977 9842026513</a></p>
                        <p><a href="https://www.ncpd.org.np" className="text-blue-600 hover:underline">www.ncpd.org.np</a></p>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}