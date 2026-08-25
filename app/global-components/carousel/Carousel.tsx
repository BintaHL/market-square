"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface mapping your exact card prop requirements
interface ApiCard {
  id: string | number;
  image: string;
  alt: string;
  title: string;
  category:string;
}


export default function CustomCardCarousel() {
  const [cards, setCards] = useState<ApiCard[]>([]);
  
  // 1. INFINITE LOOP SETUP: Start index at 5 because of the 5 cloned buffer items appended at the front
  const visibleItems = 5;
  const [currentIndex, setCurrentIndex] = useState(visibleItems);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use a mutable ref flag to safely lock layout shifts during live transition windows
  const isMoving = useRef(false);

  // Fetch data using Axios
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get<ApiCard[]>("https://fakestoreapi.com/products");
        const data = res.data;
        console.log(data);
        setCards(data);
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message || err.message || "An error occurred fetching data.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarouselData();
  }, []);

  // 2. NAVIGATIONAL HANDLERS: Simply increment/decrement index positions forward/backward
  const prevSlide = () => {
    if (cards.length <= visibleItems || isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (cards.length <= visibleItems || isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // 3. SILENT RESET LOGIC: Instantly snap positions without an animation when hitting clones
  const handleTransitionEnd = () => {
    isMoving.current = false;

    // Passed the right side bounds -> snap smoothly back to the real start index
    if (currentIndex >= cards.length + visibleItems) {
      setIsTransitioning(false);
      setCurrentIndex(visibleItems);
    }
    // Passed the left side bounds -> snap smoothly back to the real end index
    else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(cards.length);
    }
  };

  // Skeleton UI keeping your layout structural layout intact during download
  if (isLoading) {
    return (
      <div className="w-[80%] mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="flex gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1/5 h-36.25 bg-gray-100 border border-[#E5E5E5] rounded-sm animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[80%] mx-auto py-8 text-center text-red-500 font-medium text-sm">
        {error}
      </div>
    );
  }

  if (cards.length === 0) return null;

  // 4. CLONE BUILDER: Create matching seamless loop buffers
  const clonedBefore = cards.slice(-visibleItems);
  const clonedAfter = cards.slice(0, visibleItems);
  const extendedCards = [...clonedBefore, ...cards, ...clonedAfter];

  return (
    <div className="w-[80%] mx-auto py-8">
      
      {/* HEADER SECTION CONTROLLING THE POSITION ON THE RIGHT */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Categories</h2>
        
        {/* Navigation arrows positioned on the top right above content */}
        {cards.length > visibleItems && (
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg border border-[#E5E5E5] bg-white hover:bg-gray-50 text-gray-700 transition-colors shadow-sm"
              aria-label="Previous items"
            >
              <ChevronLeft />
            </button>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-lg border border-[#E5E5E5] bg-white hover:bg-gray-50 text-gray-700 transition-colors shadow-sm"
              aria-label="Next items"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* CAROUSEL VIEWPORT CONTAINER */}
      <div className="w-full overflow-hidden">
        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            transition: isTransitioning ? "transform 500ms ease-out" : "none",
          }}
        >
          {extendedCards.map((card, index) => (
            // w-1/5 shrink-0 configures exactly 5 card frames horizontally across the tracking row 
            <div key={`${card.id}-${index}`} className="w-1/5 shrink-0 flex justify-center px-2">
                
              {/* YOUR EXACT CARD FORMAT MAINTAINED */}
              <div className="w-42.5 h-36.25 rounded-sm border border-[#E5E5E5] flex flex-col items-center justify-center gap-2 shadow-sm shadow-grayish bg-white">

                {/* Image / Icon */}
                <img
                  src={card.image}
                  alt={card.alt || card.category}
                  className="w-14 h-14 object-contain"
                />

                {/* Text */}
                <p className="text-[16px] font-normal leading-6 tracking-[0%] text-gray-900 capitalize text-center px-1 line-clamp-1">
                  {card.category}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

