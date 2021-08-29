import React from 'react'
import Body from './Body';
import SideBar from './SideBar';
import './player.css'
import Footer from './Footer';
function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
               <SideBar/>
               <Body spotify={spotify}/>
            </div>

         <Footer />
        </div>
    )
}

export default Player
