import React from "react";

const EditSmartboardForm = () => {
  return (
    <div className="create-edit-smartboard-form grey-border grid grid-cols-2 gap-4">
      <div className="img-side">
        <img src={"https://placehold.co/600x400"} alt="smartboard" />
      </div>
      <div className="form-side">
        <h1 className="text-2xl font-bold">Edit Smartboard</h1>
      </div>
    </div>
  );
};

export default EditSmartboardForm;
