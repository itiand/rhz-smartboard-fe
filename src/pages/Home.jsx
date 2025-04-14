import React from "react";
import FileUpload from "../components/FileUpload/FileUpload";
import SmartboardGrid from "../components/SmarboardGrid/SmartboardGrid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/components")}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Components List
      </button>
      <FileUpload />
      <SmartboardGrid />
    </div>
  );
};

export default Home;
