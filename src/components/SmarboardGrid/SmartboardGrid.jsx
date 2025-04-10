import React from "react";
import { Link } from "react-router-dom";
import "./SmartboardGrid.css";

const SmartboardGrid = () => {
  // Array of placeholder images with different dimensions
  const placeholderPosts = [
    {
      id: 1,
      src: "https://placehold.co/400x400/e0e0e0/888888",
      alt: "Large item",
      size: "400x400",
    },
    {
      id: 2,
      src: "https://placehold.co/300x200/e0e0e0/888888",
      alt: "Small item",
      size: "300x200",
    },
    {
      id: 3,
      src: "https://placehold.co/400x300/e0e0e0/888888",
      alt: "Medium item",
      size: "400x300",
    },
    {
      id: 4,
      src: "https://placehold.co/300x500/e0e0e0/888888",
      alt: "Tall item",
      size: "300x500",
    },
    {
      id: 5,
      src: "https://placehold.co/600x250/e0e0e0/888888",
      alt: "Wide item",
      size: "600x250",
    },
    {
      id: 6,
      src: "https://placehold.co/400x400/e0e0e0/888888",
      alt: "Square item",
      size: "400x400",
    },
    {
      id: 7,
      src: "https://placehold.co/100x367/e0e0e0/888888",
      alt: "super tall item",
      size: "100x367",
    },
    {
      id: 8,
      src: "https://placehold.co/367x100/e0e0e0/888888",
      alt: "super wide item",
      size: "367x100",
    },
  ];

  // Get aspect ratio details for constraining image heights
  const getImageStyle = (size) => {
    const [width, height] = size.split("x").map(Number);
    const aspectRatio = width / height;

    // For very tall images (portrait)
    if (aspectRatio < 0.7) {
      return "max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover"; // Limit height, maintain aspect
    }

    // For very wide images (landscape)
    if (aspectRatio > 2.5) {
      // Mobile first approach: smaller height on mobile, larger on desktop
      return "max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-cover"; // Limit height for wide panoramas
    }

    // Default - let image display naturally with aspect ratio preserved
    return "h-auto";
  };

  return (
    <div className="masonry-grid p-2 sm:p-4 columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-4">
      {placeholderPosts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div className="masonry-grid__item mb-2 sm:mb-4 break-inside-avoid rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img
              src={post.src}
              alt={post.alt}
              className={`masonry-grid__item__image w-full ${getImageStyle(
                post.size
              )}`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SmartboardGrid;
