import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/videos/:idFromParams" element={<HomePage />}></Route>
          <Route path="/VideoUpload" element={<VideoUpload />}></Route>
          <Route path="*" element= {<div> 404 Not Found </div>}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
