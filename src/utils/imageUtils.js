/**
 * Calculates proper image styling classes based on image dimensions
 * Used for controlling extreme aspect ratios in masonry layouts
 *
 * @param {string} size - Image dimensions in format "widthxheight"
 * @returns {string} - Tailwind CSS classes for the image
 */
export const getImageStyle = (size) => {
  // Handle missing size gracefully
  if (!size) return "h-auto";

  const [width, height] = size.split("x").map(Number);
  const aspectRatio = width / height;

  // For very tall images (portrait)
  if (aspectRatio < 0.7) {
    return "max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover"; // Limit height for tall images
  }

  // For very wide images (landscape)
  if (aspectRatio > 2.5) {
    return "max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-cover"; // Limit height for wide panoramas
  }

  // Default - let image display naturally with aspect ratio preserved
  return "h-auto";
};
