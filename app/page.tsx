import ImageCarousel from "@/components/ui/carousel";
import LatestConferencePage from "@/components/ui/latest-conference";
import LatestNewsPage from "@/components/ui/latest-news";
import LatestTrainingPage from "@/components/ui/latest-trainings";
import LogoSection from "@/components/ui/logo";
import WhatWeDoPage from "@/components/ui/whatwedo";

export default function Home() {
  return (
    <div>
      <ImageCarousel />

      {/* New Section Below Carousel */}
      <section className="bg-[#FBFDFF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            We are a trusted bridge to connect donors and doers, to fill
            critical knowledge and resource gaps, and to unlock the full
            potential of philanthropy for cross-sector collaboration.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 tracking-wide">
            KNOWLEDGE. TRUST. CONNECTION. EMPOWERMENT. ACTION.
          </h3>
        </div>
      </section>

      <WhatWeDoPage />
      <LatestTrainingPage />
      <LatestNewsPage />
      <LatestConferencePage />
      <LogoSection />
    </div>
  );
}