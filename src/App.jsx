import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePostDetail from "./pages/SinglePostDetail/SinglePostDetail";
import Components from "./pages/Components/Components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">Smartboard</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<SinglePostDetail />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
