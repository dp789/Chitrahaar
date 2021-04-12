import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import './VideoCard.css';
function VideoCard(props) {
    const {image,title,channel,views,timestamp,channelImage}=props;
    return (
        <div className="videoCard">
            <img className="videoCard_thumnail" src={image} alt="" />
            <div className="video_info">
                <Avatar 
                className="videoCard_avatar" 
                alt={channel} 
                src={channelImage}/>
            </div>
            <div className="video_text">
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>
                 {views} . {timestamp}  
                </p> 
            </div>
        </div>
    )
}

export default VideoCard
