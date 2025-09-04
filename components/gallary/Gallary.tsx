import React from "react";

const Gallery = () => {
  const data = [
    { id: "1", imageurl: "/gallary/1.jpeg" },
    { id: "2", imageurl: "/gallary/2.jpeg" },
    { id: "3", imageurl: "/gallary/3.jpeg" },
    { id: "4", imageurl: "/gallary/4.jpeg" },
    { id: "5", imageurl: "/gallary/5.jpeg" },
    { id: "6", imageurl: "/gallary/6.jpeg" },
    { id: "7", imageurl: "/gallary/7.jpeg" },
    { id: "8", imageurl: "/gallary/8.jpeg" },
    { id: "9", imageurl: "/gallary/9.jpeg" },
    { id: "10", imageurl: "/gallary/10.jpeg" },
    { id: "11", imageurl: "/gallary/11.jpeg" },
    { id: "12", imageurl: "/gallary/12.jpeg" },
    { id: "13", imageurl: "/gallary/13.jpeg" },
  ];

  // Define bento grid layout patterns for different screen sizes
  const getBentoClass = (index: number) => {
    const patterns = {
      // Mobile: simple single column with occasional tall items
      mobile: [
        "col-span-1 row-span-1", // 1
        "col-span-1 row-span-2", // 2 - tall
        "col-span-1 row-span-1", // 3
        "col-span-1 row-span-1", // 4
        "col-span-1 row-span-2", // 5 - tall
        "col-span-1 row-span-1", // 6
        "col-span-1 row-span-1", // 7
        "col-span-1 row-span-1", // 8
        "col-span-1 row-span-2", // 9 - tall
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
    <div className=" mx-auto px-2 md:px-0 py-12">
      <div className="flex flex-col gap-y-3 py-4 justify-between items-start">
        <p className="text-base font-semibold text-[#248406]">PHOTO GALLERY</p>
        <h1 className="text-4xl font-semibold">Capturing Stories Through <span className="text-[#248406]">Photos</span></h1>
      </div>
      <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`
              ${getBentoClass(index)}
              group relative overflow-hidden rounded-2xl shadow-lg 
              transition-all duration-500 ease-out transform hover:scale-[1.02] 
              hover:shadow-2xl hover:z-10
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            <img
              src={item.imageurl}
              alt={`Gallery Image ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Optional: Image number overlay */}
            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              {item.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
