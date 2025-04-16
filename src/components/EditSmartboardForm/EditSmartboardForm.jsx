import React, { useState } from "react";

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

const getImageStyle = (size) => {
  return `w-full h-full object-cover ${size}`;
};

const EditSmartboardForm = () => {
  const [size, setSize] = useState(getRandomSize());

  const changeSize = () => {
    setSize(getRandomSize());
  };

  return (
    <>
      <button
        className="mb-2 cursor-pointer rounded-md bg-blue-500 p-2 text-white"
        onClick={() => changeSize()}
      >
        Change Size
      </button>

      <div className="create-edit-smartboard-form grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="img-side">
          <img
            src={"https://placehold.co/" + size}
            alt="smartboard"
            className={getImageStyle(size)}
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
            <div className="flex items-center justify-between border-t border-b py-3">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Invite people</span>
              </div>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Add location section */}
            <div className="flex items-center justify-between border-b py-3">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Add location</span>
              </div>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Allow comments toggle */}
            <div className="flex items-center justify-between py-3">
              <span>Allow people to comment</span>
              <label className="relative inline-block h-6 w-12">
                <input type="checkbox" className="h-0 w-0 opacity-0" />
                <span className="absolute inset-0 cursor-pointer rounded-full bg-gray-300 transition-all duration-300 before:absolute before:bottom-0.5 before:left-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-all before:duration-300 before:content-[''] checked:bg-black checked:before:translate-x-6"></span>
              </label>
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
