import React from 'react'
import rasm from "./logo.png"
import { Link } from 'react-router-dom'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <div className="imgWrap">
            <img src={rasm} alt="" />
        </div>
        <div className="textWelcome">
            Welcome to <span>SM</span>artgramm <div className='handAnime'>🖐️</div>
        </div>
        <div className="startMes">
            <Link to={"/register"}>Start Messaging</Link>
        </div>
    </div>
  )
}

export default Home