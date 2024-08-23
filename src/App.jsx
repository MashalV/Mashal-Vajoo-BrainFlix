import Navigation from "./components/Navigation/Navigation";
import videos from "../src/data/video-details.json";
import { useState } from "react";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";
import "./App.scss";
import Video from "./components/Video/Video";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import VideoUpload from './pages/VideoUpload/VideoUpload'

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const list = videos.filter((v) => v.id !== selectedVideo.id);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage />}></Route>
          <Route path='/videos/:idFromParams' element={<HomePage />}></Route> 
          <Route path= '/VideoUpload' element={<VideoUpload />}></Route>


        </Routes>
      
      
      </BrowserRouter>
      {/* <Navigation />
      <Video video = {selectedVideo} />
      <div className = "wrapper">
        <section className="wrapper__left">
          <VideoDetails video={selectedVideo} />
        </section>
        <section className = "wrapper__right">
          <label className="titled">NEXT VIDEOS</label>
          <ul className="video__list">
            {list.map((video) => (
              <VideoList key={video.id} video={video} setter={setSelectedVideo} />
            ))}
          </ul>
        </section>
      </div> */}
      
    </>
  );
}

export default App;
