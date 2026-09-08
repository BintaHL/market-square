"use client";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full px-4 md:px-8 py-10 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            Our Story
          </h1>
          <div className="space-y-5 text-base text-gray-700 text-center md:text-left leading-relaxed">
            <p>
              Launched in 2015, Vendora-Cart is South Asia&apos;s premier online shopping 
              marketplace with an active presence in Bangladesh. Supported 
              by a wide range of tailored marketing, data and service solutions, 
              Exclusive has 10,500 sellers and 300 brands and serves 3 
              million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a 
              very fast pace. Vendora-Cart offers a diverse assortment in categories 
              ranging from consumer.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-150 md:max-w-none aspect-[700/600]">
            <Image 
              src="/images/about-portrait.png" 
              alt="about-portrait" 
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutHero;
