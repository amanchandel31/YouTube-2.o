import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import { Routes ,Route } from 'react-router-dom'
import Home from "./Pages/Home/Home.jsx"
import Video from "./Pages/Video/Video.jsx"
const App = () => {
  const [sidebar,setSidebar]=useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
