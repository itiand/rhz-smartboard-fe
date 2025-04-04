import React from "react";
import "./SmartboardGrid.css";

const SmartboardGrid = () => {
  // Array of placeholder images with different dimensions
  const placeholderImages = [
    {
      src: "https://placehold.co/400x400/e0e0e0/888888",
      alt: "Large item",
      size: "400x400",
    },
    {
      src: "https://placehold.co/300x200/e0e0e0/888888",
      alt: "Small item",
      size: "300x200",
    },
    {
      src: "https://placehold.co/400x300/e0e0e0/888888",
      alt: "Medium item",
      size: "400x300",
    },
    {
      src: "https://placehold.co/300x500/e0e0e0/888888",
      alt: "Tall item",
      size: "300x500",
    },
    {
      src: "https://placehold.co/600x250/e0e0e0/888888",
      alt: "Wide item",
      size: "600x250",
    },
    {
      src: "https://placehold.co/400x400/e0e0e0/888888",
      alt: "Square item",
      size: "400x400",
    },
  ];

  return (
    <div className="p-4 columns-1 md:columns-2 lg:columns-3 gap-4">
      {placeholderImages.map((image, index) => (
        <div
          key={index}
          className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
        >
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default SmartboardGrid;
