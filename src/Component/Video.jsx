import Avatar from "@mui/material/Avatar";
import './Video.css'

function Video({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbmail" src={image} alt="" />
      <div className="videoCard_info">
        <Avatar 
        className="videoCard_avatar" 
        alt={channel} 
        src={channelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} <b>.</b>{""} {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
