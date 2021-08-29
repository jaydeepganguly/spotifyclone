import React from 'react'
import './Sidebar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function SideBar() {
    const [{ playlists } , dispatch ] =  useDataLayerValue();

    return (
        <div className="Sidebar">
            <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />

        <SideBarOption title="home" Icon={HomeIcon} />
        <SideBarOption title="search" Icon={SearchIcon} />
        <SideBarOption title="library" Icon={LibraryMusicIcon} />


        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map(playlist => (
            <SideBarOption title={playlist.name}/>
        ))}
        </div>
    )
}

export default SideBar
