import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import HomeIcon from "@mui/icons-material/Home";
import WhatShotIcon from "@mui/icons-material/WhatShot";
import Subscriptions from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import { OndemandVideo ,WatchLater, ThumbUpAltOutlined,ExpandMoreOutlined } from "@mui/icons-material";


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon}  title="Home"/>
      <SidebarRow Icon={WhatShotIcon}  title="Trending"/>
      <SidebarRow Icon={Subscriptions}  title="Subsription"/>
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={OndemandVideo} title="Your Videos"/>
      <SidebarRow Icon={WatchLater} title="Watch Later"/>
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more"/>
      <hr />
    </div>
  )
}

export default Sidebar