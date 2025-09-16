"use client";
import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ZoomIn, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const Gallery = () => {
  const { t, getFontClass } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const data = useMemo(
    () => [
      {
        id: "1",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/odftsa6onlo0ulpmkb3u.jpg",
        alt: "Volunteer community service activity",
        title: "Community Service",
      },
      {
        id: "2",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/ni65bolu2kqrqc2lkpcv.jpg",
        alt: "Educational support program",
        title: "Education Support",
      },
      {
        id: "3",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/ni65bolu2kqrqc2lkpcv.jpg",
        alt: "Student mentorship program",
        title: "Student Mentorship",
      },
      {
        id: "4",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/kdutrtjbms87sfhlvuxk.jpg",
        alt: "Environmental volunteering",
        title: "Environmental Care",
      },
      {
        id: "5",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/udriuphi1pwb1dtpziy4.jpg",
        alt: "Healthcare volunteer work",
        title: "Healthcare Support",
      },
      {
        id: "6",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/egrpkzghk8cibykjlrlq.jpg",
        alt: "Community development project",
        title: "Community Development",
      },
      {
        id: "7",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/mflcaacdxpkjma1jvphp.jpg",
        alt: "Volunteer team collaboration",
        title: "Team Collaboration",
      },
      {
        id: "8",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1731929302/urmdshmrq4dzmbddbgzf.png",
        alt: "Social impact initiative",
        title: "Social Impact",
      },
      {
        id: "9",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174679/mxhyug2gvglwmjmjjjt0.jpg",
        alt: "Volunteer training session",
        title: "Volunteer Training",
      },
      {
        id: "10",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174735/rgxvmmdlui0yn8emyiqk.jpg",
        alt: "Community outreach program",
        title: "Community Outreach",
      },
      {
        id: "11",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174766/kssnbr2mljbbs5sj3bbx.jpg",
        alt: "Volunteer appreciation event",
        title: "Volunteer Appreciation",
      },
      {
        id: "12",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174734/xrdekh1u8u1kzbkjfmo4.jpg",
        alt: "Youth development program",
        title: "Youth Development",
      },
      {
        id: "13",
        imageurl:
          "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174736/if4vok1pief4hjumbkms.jpg",
        alt: "International volunteer exchange",
        title: "International Exchange",
      },
    ],
    []
  );

  // Optimized image URL generation with Cloudinary transformations
  const getOptimizedImageUrl = useCallback(
    (url: string, width: number = 400, quality: string = "auto") => {
      if (url.includes("cloudinary.com")) {
        const parts = url.split("/upload/");
        if (parts.length === 2) {
          return `${parts[0]}/upload/w_${width},q_${quality},f_auto,c_fill,g_auto/${parts[1]}`;
        }
      }
      return url;
    },
    []
  );

  // Generate blur placeholder for images
  const getBlurDataURL = useCallback(() => {
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";
  }, []);

  // Handle image loading states
  const handleImageLoad = useCallback((imageId: string) => {
    setLoadingImages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(imageId);
      return newSet;
    });
  }, []);

  const handleImageStartLoad = useCallback((imageId: string) => {
    setLoadingImages((prev) => new Set(prev).add(imageId));
  }, []);

  // Navigation functions for modal
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  }, [data.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  }, [data.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
        if (e.key === "Escape") setSelectedImage(null);
      }
    },
    [selectedImage, goToPrevious, goToNext]
  );

  // Add keyboard event listener
  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage, handleKeyDown]);

  // Define bento grid layout patterns for different screen sizes
  const getBentoClass = (index: number) => {
    const patterns = {
      // Mobile: smaller, more compact grid with 2 columns
      mobile: [
        "col-span-1 row-span-1", // 1
        "col-span-1 row-span-1", // 2
        "col-span-1 row-span-1", // 3
        "col-span-1 row-span-1", // 4
        "col-span-1 row-span-1", // 5
        "col-span-1 row-span-1", // 6
        "col-span-1 row-span-1", // 7
        "col-span-1 row-span-1", // 8
        "col-span-1 row-span-1", // 9
        "col-span-1 row-span-1", // 10
        "col-span-1 row-span-1", // 11
        "col-span-1 row-span-1", // 12
        "col-span-1 row-span-1", // 13
      ],
      // Tablet: 2 columns with varied sizes
      tablet: [
        "col-span-2 row-span-2", // 1 - large
        "col-span-1 row-span-1", // 2
        "col-span-1 row-span-1", // 3
        "col-span-1 row-span-2", // 4 - tall
        "col-span-1 row-span-1", // 5
        "col-span-2 row-span-1", // 6 - wide
        "col-span-1 row-span-1", // 7
        "col-span-1 row-span-2", // 8 - tall
        "col-span-1 row-span-1", // 9
        "col-span-1 row-span-1", // 10
        "col-span-2 row-span-1", // 11 - wide
        "col-span-1 row-span-1", // 12
        "col-span-1 row-span-1", // 13
      ],
      // Desktop: 4 columns with complex bento layout
      desktop: [
        "col-span-2 row-span-2", // 1 - large
        "col-span-1 row-span-1", // 2
        "col-span-1 row-span-1", // 3
        "col-span-1 row-span-2", // 4 - tall
        "col-span-1 row-span-1", // 5
        "col-span-2 row-span-1", // 6 - wide
        "col-span-1 row-span-1", // 7
        "col-span-1 row-span-1", // 8
        "col-span-1 row-span-2", // 9 - tall
        "col-span-2 row-span-1", // 10 - wide
        "col-span-1 row-span-1", // 11
        "col-span-1 row-span-1", // 12
        "col-span-2 row-span-1", // 13 - wide
      ],
    };

    const mobileClass = patterns.mobile[index % patterns.mobile.length];
    const tabletClass = patterns.tablet[index % patterns.tablet.length];
    const desktopClass = patterns.desktop[index % patterns.desktop.length];

    return `${mobileClass} sm:${tabletClass} lg:${desktopClass}`;
  };

  return (
    <div className={`w-full overflow-hidden ${getFontClass()}`}>
      {/* Container with proper max-width and responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-y-3 py-4 justify-between items-start">
          <p className="text-sm sm:text-base font-semibold text-[#248406] uppercase tracking-wide">
            PHOTO GALLERY
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Capturing Stories Through{" "}
            <span className="text-[#248406]">Photos</span>
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid mt-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-[200px] gap-2 sm:gap-4">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`
                ${getBentoClass(index)}
                group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg 
                transition-all duration-300 ease-out transform hover:scale-[1.02] 
                hover:shadow-xl hover:z-10 cursor-pointer bg-gray-100
              `}
              onClick={() => {
                setSelectedImage(item.imageurl);
                setCurrentIndex(index);
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title} - Image ${item.id}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(item.imageurl);
                  setCurrentIndex(index);
                }
              }}
            >
              {/* Loading overlay */}
              {loadingImages.has(item.id) && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-30">
                  <Loader2 className="h-4 w-4 sm:h-6 sm:w-6 animate-spin text-gray-500" />
                </div>
              )}

              {/* Fallback for failed images */}
              {!loadingImages.has(item.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center z-0">
                  <div className="text-gray-400 text-center">
                    <div className="text-xl sm:text-2xl mb-2">📷</div>
                    <div className="text-xs">Loading...</div>
                  </div>
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Optimized Next.js Image */}
              <Image
                src={getOptimizedImageUrl(item.imageurl, 400, "auto")}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                onLoad={() => handleImageLoad(item.id)}
                onLoadStart={() => handleImageStartLoad(item.id)}
                quality={85}
                placeholder="blur"
                blurDataURL={getBlurDataURL()}
              />

              {/* Quick view icon overlay */}
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-gray-800 p-1.5 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-20">
                <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>

              {/* Image title overlay */}
              <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 bg-white/90 backdrop-blur-sm text-gray-800 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 max-w-[80%] truncate">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery stats */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 sm:gap-8 bg-gradient-to-r from-emerald-50 to-blue-50 px-4 sm:px-8 py-4 rounded-full max-w-full overflow-x-auto">
            <div className="text-center flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold text-[#248406]">
                {data.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Photos</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-gray-300 flex-shrink-0"></div>
            <div className="text-center flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold text-[#248406]">13</div>
              <div className="text-xs sm:text-sm text-gray-600">Programs</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-gray-300 flex-shrink-0"></div>
            <div className="text-center flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold text-[#248406]">2</div>
              <div className="text-xs sm:text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Modal for all images - positioned outside the max-width container */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black border-0 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white border border-white/20"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
            >
              <X className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white border border-white/20"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white border border-white/20"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
              {currentIndex + 1} / {data.length}
            </div>

            {/* Full-size image container */}
            <div className="w-full h-full flex items-center justify-center">
              {selectedImage && data[currentIndex] && (
                <Image
                  src={data[currentIndex].imageurl}
                  alt={
                    data[currentIndex].alt ||
                    `Gallery Image ${currentIndex + 1} - Full View`
                  }
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain"
                  priority={true}
                  quality={95}
                  placeholder="blur"
                  blurDataURL={getBlurDataURL()}
                />
              )}
            </div>

            {/* Image title in modal */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
              {data[currentIndex]?.title}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;