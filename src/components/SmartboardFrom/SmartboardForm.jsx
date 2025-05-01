import React, { useState, useEffect, useRef } from "react";
import { UserPlus, ChevronRight, MapPin, SquarePen, Bug } from "lucide-react";

const SmartboardForm = ({ existingSmartboard = null }) => {
  const [formData, setFormData] = useState({
    title: existingSmartboard?.title || "",
    description: existingSmartboard?.description || "",
    image: existingSmartboard?.image || null,
    audio: existingSmartboard?.audio || null,
    allowComments: existingSmartboard?.allowComments || false,
  });

  const [showDebug, setShowDebug] = useState(false);
  const fileInputRef = useRef(null);
  const audioInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    if (existingSmartboard) {
      setFormData({
        title: existingSmartboard.title || "",
        description: existingSmartboard.description || "",
        image: existingSmartboard.image || null,
        audio: existingSmartboard.audio || null,
        allowComments: existingSmartboard.allowComments || false,
      });
    }
  }, [existingSmartboard]);

  const updateTitle = async (newTitle) => {
    try {
      const response = await fetch("http://localhost:5000/smartboard", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error updating title:", data.error);
      } else {
        console.log("Title updated successfully:", data.message);

        // Send a log to the backend about the title update
        await fetch("http://localhost:5000/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: `Title updated to: ${newTitle}` })
        });
      }
    } catch (error) {
      console.error("Network error while updating title:", error);
    }
  };

  const updateDescription = async (newDescription) => {
    try {
      const response = await fetch("http://localhost:5000/smartboard", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: newDescription }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error updating description:", data.error);
      } else {
        console.log("Description updated successfully:", data.message);

        // Send a log to the backend about the description update
        await fetch("http://localhost:5000/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: `Description updated to: ${newDescription}` }),
        });
      }
    } catch (error) {
      console.error("Network error while updating description:", error);
    }
  };

  const handleDelete = async () => {
    if (!formData.image) {
      console.error("No image to delete");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/smartboard", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image_filename: formData.image }),  // Send the image filename to the backend
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Smartboard deleted successfully:", result.message);

        setFormData({
          title: "",
          description: "",
          image: null,
          audio: null,
          allowComments: false,
        });
        setImageFile(null);
        setAudioFile(null);

        await fetch("http://localhost:5000/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "Smartboard was deleted" }),
        });
      } else {
        console.error("Delete failed:", result.error);
      }
    } catch (error) {
      console.error("Delete request failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateTitle(formData.title);
    }
  };

  const handleDescriptionKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent newline in textarea
      updateDescription(formData.description);
    }
  };

  const handleAllowCommentsToggle = async (e) => {
    const newValue = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      allowComments: newValue,
    }));

    // Send a log to the backend when the allowComments toggle is changed
    try {
      await fetch("http://localhost:5000/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Allow comments toggled ${newValue ? "on" : "off"}`,
        }),
      });
    } catch (error) {
      console.error("Failed to log allowComments toggle:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const MAX_FILE_SIZE_MB = 16;
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`File too large. Max allowed size is ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }
  
    const localUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: localUrl }));
    setImageFile(file);
  
    const formDataToUpload = new FormData();
    formDataToUpload.append("image", file);
  
    try {
      await fetch("http://localhost:5000/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "User is uploading an image" }),
      });
  
      const response = await fetch("http://localhost:5000/smartboard", {
        method: "POST",
        body: formDataToUpload,
      });
  
      const result = await response.json();
      if (response.ok) {
        if (result.files && result.files.image) {
          setFormData((prev) => ({ ...prev, image: result.files.image[0] }));
          console.log("Uploaded to S3:", result.files.image[0]);
        } else {
          console.error("Invalid result format:", result);
        }
      } else {
        console.error("Upload failed:", result);
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  
  const handleAudioUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, audio: localUrl }));
    setAudioFile(file);

    const formDataToUpload = new FormData();
    formDataToUpload.append("audio", file);

    try {
      const response = await fetch("http://localhost:5000/upload_audio", {
        method: "POST",
        body: formDataToUpload,
      });

      const result = await response.json();
      if (response.ok) {
        setFormData((prev) => ({ ...prev, audio: result.files.audio[0] }));
        console.log("Uploaded audio to S3:", result.files.audio[0]);
      } else {
        console.error("Audio upload failed:", result);
      }
    } catch (error) {
      console.error("Audio upload error:", error);
    }
  };

  const triggerFileSelection = () => {
    fileInputRef.current.click();
  };

  const triggerAudioSelection = () => {
    audioInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const smartboardData = formData;

    if (existingSmartboard) {
      console.log("Updating smartboard:", smartboardData);
    } else {
      console.log("Creating new smartboard:", smartboardData);
    }
  };

  const saveAsDraft = () => {
    const draftData = {
      ...formData,
      isDraft: true,
    };
    console.log("Saving as draft:", draftData);
  };

  return (
    <>
      <div className="create-edit-smartboard-form grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        <div className="img-side flex max-h-[450px] items-center justify-center overflow-hidden rounded-lg bg-gray-50 md:max-h-[650px]">
          <div className="relative flex h-full w-full items-center justify-center">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <input
              type="file"
              ref={audioInputRef}
              className="hidden"
              accept="audio/*"
              onChange={handleAudioUpload}
            />
            {formData.image ? (
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
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleDescriptionKeyDown}
                placeholder="Description"
                className="grey-border w-full resize-none rounded-md p-2 text-sm"
                rows="4"
              />
            </div>

            <div className="flex items-center justify-between border-t border-b border-gray-300 py-3">
              <div className="flex cursor-pointer items-center gap-2">
                <UserPlus className="h-4 w-4" />
                <span>Invite people</span>
              </div>
              <ChevronRight className="h-4 w-4 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between border-b border-gray-300 py-3">
              <div className="flex cursor-pointer items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Add location</span>
              </div>
              <ChevronRight className="h-4 w-4 cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 py-3">
              <label className="relative inline-block h-6 w-12">
                <input
                  type="checkbox"
                  className="h-0 w-0 opacity-0"
                  checked={formData.allowComments}
                  onChange={handleAllowCommentsToggle}
                />
                <span
                  className={`absolute inset-0 cursor-pointer rounded-full transition-all duration-300 before:absolute before:bottom-0.5 before:left-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-all before:duration-300 before:content-[''] ${
                    formData.allowComments
                      ? "bg-black before:translate-x-6"
                      : "bg-gray-300"
                  }`}></span>
              </label>
              <span>Allow people to comment</span>
            </div>

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
              {(formData.image || formData.audio) && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="rounded-full bg-red-500 px-4 py-2 text-sm text-white"
                >
                  Delete Media
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

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
            <h3 className="mb-2 text-xs text-gray-500">State Debug</h3>
            <pre className="text-xs">{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default SmartboardForm;
