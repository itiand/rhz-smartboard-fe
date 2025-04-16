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
      <button onClick={() => changeSize()}>Change Size</button>
      <div className="create-edit-smartboard-form grey-border grid grid-cols-2 gap-4">
        <div className="img-side">
          <img
            src={"https://placehold.co/" + size}
            alt="smartboard"
            className={getImageStyle(size)}
          />
        </div>
        <div className="form-side">
          <h1 className="text-2xl font-bold">Edit Smartboard</h1>
        </div>
      </div>
    </>
  );
};

export default EditSmartboardForm;
