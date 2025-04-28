import React, { useState, useEffect, useRef } from "react";
import { UserPlus, ChevronRight, MapPin, SquarePen, Bug } from "lucide-react";

//test for different sizes, extra wide, extra tall, square, landscape, portrait
// const sizes = [
//   "600x400",
//   "300x600",
//   "400x600",
//   "600x300",
//   "400x300",
//   "100x600",
//   "600x100",
//   "3087x2058",
//   "3088x2056",
//   "3132x2088",
//   "3087x2058",
// ];

// const getRandomSize = () => {
//   return sizes[Math.floor(Math.random() * sizes.length)];
// };

const SmartboardForm = ({ existingSmartboard = null }) => {
  // Initialize state with existing data or defaults
  const [formData, setFormData] = useState({
    title: existingSmartboard?.title || "",
    description: existingSmartboard?.description || "",
    image: existingSmartboard?.image || null,
  });
  const [allowComments, setAllowComments] = useState(
    existingSmartboard?.allowComments || false,
  );

  // Add debug state
  const [showDebug, setShowDebug] = useState(false);
  const fileInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  // Update form if existingSmartboard changes
  useEffect(() => {
    if (existingSmartboard) {
      setFormData({
        title: existingSmartboard.title || "",
        description: existingSmartboard.description || "",
        image: existingSmartboard.image || null,
      });
      setAllowComments(existingSmartboard.allowComments || false);
    }
  }, [existingSmartboard]);

  const handleChange = (e) => {
    const { name, value } = e.target; // ****
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log("imageUrl", imageUrl);
      setImageFile(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const triggerFileSelection = () => {
    console.log("triggering file selection");
    console.log(fileInputRef.current);
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const smartboardData = {
      ...formData,
      allowComments,
    };

    if (existingSmartboard) {
      // Update existing smartboard
      console.log("Updating smartboard:", smartboardData);
      // Call update API here
    } else {
      // Create new smartboard
      console.log("Creating new smartboard:", smartboardData);
      // Call create API here
    }
  };

  const saveAsDraft = () => {
    const draftData = {
      ...formData,
      allowComments,
      isDraft: true,
    };
    console.log("Saving as draft:", draftData);
    // Call save draft API here
  };

  return (
    <>
      <div className="create-edit-smartboard-form grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        <div className="img-side flex max-h-[450px] items-center justify-center overflow-hidden rounded-lg bg-gray-50 md:max-h-[650px]">
          <div className="relative flex h-full w-full items-center justify-center">
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />

            {formData.image ? (
              // Show image with edit option when an image exists
              <>
                <SquarePen
                  className="absolute top-2 right-2 z-10 h-4 w-4 cursor-pointer"
                  onClick={triggerFileSelection}
                />
                <img
                  src={formData.image}
                  alt="smartboard"
                  className="h-full w-full object-contain"
                />
              </>
            ) : (
              // Show upload prompt when no image is selected
              <div
                className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
                onClick={triggerFileSelection}
              >
                <div className="rounded-full bg-gray-200 p-4">
                  <SquarePen className="h-8 w-8 text-gray-500" />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Click to upload image
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="form-side rounded-lg border border-gray-300 px-4 py-6">
          <h2 className="md:text-md mb-5 text-lg">
            {existingSmartboard ? "Edit Smartboard" : "Create Smartboard"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-1 block text-sm">Title of Board</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="grey-border w-full rounded-md p-2 text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm">Description of Board</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="grey-border w-full resize-none rounded-md p-2 text-sm"
                rows="4"
              />
            </div>

            {/* Invite people section */}
            <div className="flex items-center justify-between border-t border-b border-gray-300 py-3">
              <div className="flex cursor-pointer items-center gap-2">
                <UserPlus className="h-4 w-4" />
                <span>Invite people</span>
              </div>
              <ChevronRight className="h-4 w-4 cursor-pointer" />
            </div>

            {/* Add location section */}
            <div className="flex items-center justify-between border-b border-gray-300 py-3">
              <div className="flex cursor-pointer items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Add location</span>
              </div>
              <ChevronRight className="h-4 w-4 cursor-pointer" />
            </div>

            {/* Allow comments toggle */}
            <div className="flex items-center gap-2 py-3">
              <label className="relative inline-block h-6 w-12">
                <input
                  type="checkbox"
                  className="h-0 w-0 opacity-0"
                  checked={allowComments}
                  onChange={(e) => setAllowComments(e.target.checked)}
                />
                <span
                  className={`absolute inset-0 cursor-pointer rounded-full transition-all duration-300 before:absolute before:bottom-0.5 before:left-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-all before:duration-300 before:content-[''] ${allowComments ? "bg-black before:translate-x-6" : "bg-gray-300"}`}
                ></span>
              </label>
              <span>Allow people to comment</span>
            </div>

            {/* Action buttons */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={saveAsDraft}
                className="rounded-full border px-4 py-2 text-sm"
              >
                Save to drafts
              </button>
              <button
                type="submit"
                className="rounded-full bg-black px-4 py-2 text-sm text-white"
              >
                {existingSmartboard ? "Update" : "Publish"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* State Debugging Panel */}
      <div className="mt-8">
        <button
          onClick={() => setShowDebug(!showDebug)}
          className="mb-2 flex items-center gap-2 text-sm text-gray-500"
        >
          <Bug size={16} />
          {showDebug ? "Hide" : "Show"} Debug Info
        </button>

        {showDebug && (
          <div className="max-h-60 overflow-auto rounded-md border border-gray-300 bg-gray-100 p-4">
            <h3 className="mb-2 text-sm font-bold">Form State</h3>
            <pre className="text-xs whitespace-pre-wrap">
              {JSON.stringify(formData, null, 2)}
            </pre>

            <h3 className="mt-4 mb-2 text-sm font-bold">Allow Comments</h3>
            <pre className="text-xs">
              {JSON.stringify(allowComments, null, 2)}
            </pre>

            <h3 className="mt-4 mb-2 text-sm font-bold">Event Log</h3>
            <div className="text-xs">
              <p>
                • Form was{" "}
                {existingSmartboard
                  ? "loaded with existing data"
                  : "initialized with default values"}
              </p>
              <p>• Current mode: {existingSmartboard ? "Update" : "Create"}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SmartboardForm;
