import React from "react";
import { Link } from "react-router-dom";
import "./SmartboardGrid.css";
import { getImageStyle } from "../../utils/imageUtils";

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

  return (
    <div className="masonry-grid columns-1 gap-2 p-2 sm:columns-2 sm:gap-4 sm:p-4 lg:columns-3">
      {placeholderPosts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div className="masonry-grid__item mb-2 break-inside-avoid overflow-hidden rounded-lg shadow transition-shadow hover:shadow-lg sm:mb-4">
            <img
              src={post.src}
              alt={post.alt}
              className={`masonry-grid__item__image w-full ${getImageStyle(
                post.size,
              )}`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SmartboardGrid;
