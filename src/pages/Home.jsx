import React from "react";
import FileUpload from "../components/FileUpload/FileUpload";
import SmartboardGrid from "../components/SmarboardGrid/SmartboardGrid";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <FileUpload />
      <SmartboardGrid />
    </div>
  );
};

export default Home;
