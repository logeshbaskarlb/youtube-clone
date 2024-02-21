import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

function ChannelRow({image, Channel, verified, subs, noOfVideos, description}) {
  return (
    <div className="channelRow">
      <Avatar 
      className="channelRow_logo" 
      alt={Channel} src={image} />
      
      <div className="channelRow_text">
        <h4>{Channel} {verified && <CheckCircleOutlineOutlined />}</h4>
        <p>{subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
