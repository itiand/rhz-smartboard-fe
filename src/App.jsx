import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import SinglePostDetail from "./pages/SinglePostDetail";
import "./App.css";

function App() {


  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">Smartboard</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<SinglePostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
