import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import EditorPage from "./pages/editor-page/EditorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor-page/:roomId" element={<EditorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
