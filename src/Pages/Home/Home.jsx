import React, { useState } from 'react'
import Feed from '../../Component/Feed/Feed'
import './Home.css'
import Sidebr from '../../Component/Sidebr/Sidebr'
const Home = ({sidebar}) => {

  const [category,setCategory]=useState(0);
  return (
    <>
    <Sidebr sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${sidebar?"":"large-container"}`}>
      <Feed category={category}/>
      
    </div>
      
    </>
  )
}

export default Home
