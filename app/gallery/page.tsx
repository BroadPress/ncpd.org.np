"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoSection from "@/components/ui/logo";
import { motion } from "framer-motion";

interface SubImage {
  id: string;
  src: string;
  alt: string;
}

interface GalleryItem {
  id: string;
  title: string;
  imageSrc: string;
  subImages: SubImage[];
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Certified Fund Raising Specialist (CFRS) Training",
    imageSrc: "/gallery/cfrs.jpg",
    subImages: [
      { id: "cfrs-1", src: "/gallery/cfrs/cfrs-session-1.jpg", alt: "CFRS Training Session 1" },
      { id: "cfrs-2", src: "/gallery/cfrs/cfrs-session-2.jpg", alt: "CFRS Training Session 2" },
      { id: "cfrs-3", src: "/gallery/cfrs/cfrs-participants.jpg", alt: "CFRS Participants" },
      { id: "cfrs-4", src: "/gallery/cfrs/cfrs-certificate.jpg", alt: "CFRS Certificate Ceremony" },
      { id: "cfrs-5", src: "/gallery/cfrs/cfrs-workshop.jpg", alt: "CFRS Workshop Activities" }
    ]
  },
  {
    id: "2",
    title: "Keys to Fundraising Success and Capacity Building",
    imageSrc: "/gallery/keys.jpg",
    subImages: [
      { id: "keys-1", src: "/gallery/keys/keys-presentation.jpg", alt: "Keys Presentation" },
      { id: "keys-2", src: "/gallery/keys/keys-audience.jpg", alt: "Keys Audience" },
      { id: "keys-3", src: "/gallery/keys/keys-networking.jpg", alt: "Keys Networking Session" },
      { id: "keys-4", src: "/gallery/keys/keys-materials.jpg", alt: "Keys Training Materials" },
      { id: "keys-5", src: "/gallery/keys/keys-group-work.jpg", alt: "Keys Group Work" }
    ]
  },
  {
    id: "3",
    title: "1st National Philanthropy and Fundraising Conference",
    imageSrc: "/gallery/conference.jpg",
    subImages: [
      { id: "conf-1", src: "/gallery/conference/conf-opening.jpg", alt: "Conference Opening Ceremony" },
      { id: "conf-2", src: "/gallery/conference/conf-keynote.jpg", alt: "Conference Keynote Speaker" },
      { id: "conf-3", src: "/gallery/conference/conf-panel.jpg", alt: "Conference Panel Discussion" },
      { id: "conf-4", src: "/gallery/conference/conf-networking.jpg", alt: "Conference Networking" },
      { id: "conf-5", src: "/gallery/conference/conf-closing.jpg", alt: "Conference Closing Ceremony" },
      { id: "conf-6", src: "/gallery/conference/conf-awards.jpg", alt: "Conference Awards" }
    ]
  },
];

const GalleryPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem>(galleryItems[0]);
  const [activeSubImage, setActiveSubImage] = useState<SubImage | null>(null);

  const openModal = (item: GalleryItem) => {
    setActiveGalleryItem(item);
    setActiveSubImage(item.subImages[0]); // Set first sub-image as active
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>{/* Header */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2" initial="hidden" animate="visible">
          Gallery
        </motion.h1>
        <nav className="text-sm text-gray-600 mt-2">
          <a href="/" className="text-blue-700 hover:text-blue-900">Home</a> / <span className="text-blue-600">Gallery</span>
        </nav>
      </header>
    <div className=" bg-white pt-20 pb-24 px-20 font-inter">
            {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="cursor-pointer"
          >
            <div className="w-92 h-58 relative overflow-hidden rounded-xl">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="text-center text-blue-600 text-sm font-semibold mt-2 w-72">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && activeSubImage && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 w-[90%] max-w-5xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Title */}
            <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
              {activeGalleryItem.title}
            </h2>

            {/* Large image */}
            <div className="w-full h-96 relative rounded-xl overflow-hidden mb-6">
              <Image
                src={activeSubImage.src}
                alt={activeSubImage.alt}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            {/* Sub-image thumbnails */}
            <div className="flex flex-wrap justify-center gap-4">
              {activeGalleryItem.subImages.map((subImage) => (
                <div
                  key={subImage.id}
                  onClick={() => setActiveSubImage(subImage)}
                  className={`cursor-pointer border-2 rounded-lg overflow-hidden w-36 h-24 relative transition-all duration-200 ${
                    subImage.id === activeSubImage.id ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <Image
                    src={subImage.src}
                    alt={subImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
          {/* Footer Logo */}
        <LogoSection />
    </>
  );
};

export default GalleryPage;
