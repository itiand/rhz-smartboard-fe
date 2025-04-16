import React, { useState } from "react";
import { UserPlus, ChevronRight, MapPin } from "lucide-react";

//test for different sizes, extra wide, extra tall, square, landscape, portrait
const sizes = [
  "600x400",
  "300x600",
  "400x600",
  "600x300",
  "400x300",
  "100x600",
  "600x100",
  "3087x2058",
  "3088x2056",
  "3132x2088",
  "3087x2058",
];

const getRandomSize = () => {
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const EditSmartboardForm = () => {
  const [size, setSize] = useState(getRandomSize());
  const [allowComments, setAllowComments] = useState(false);

  const changeSize = () => {
    setSize(getRandomSize());
  };

  return (
    <>
      <button
        className="mb-8 cursor-pointer rounded-md bg-blue-500 p-2 text-white"
        onClick={() => changeSize()}
      >
        Change Size
      </button>

      <div className="create-edit-smartboard-form grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
        <div className="img-side flex max-h-[450px] items-center justify-center overflow-hidden rounded-lg bg-gray-50 md:max-h-[650px]">
          <img
            src={"https://placehold.co/" + size}
            alt="smartboard"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="form-side rounded-lg border border-gray-300 px-4 py-6">
          <h2 className="md:text-md mb-5 text-lg">Edit Smartboard</h2>
          <form>
            <div className="mb-4">
              <label className="mb-1 block text-sm">Title of Board</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="grey-border w-full rounded-md p-2 text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm">Description of Board</label>
              <textarea
                name="description"
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
                className="rounded-full border px-4 py-2 text-sm"
              >
                Save to drafts
              </button>
              <button
                type="submit"
                className="rounded-full bg-black px-4 py-2 text-sm text-white"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditSmartboardForm;
