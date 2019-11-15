import React from 'react';
import video from "../assets/img/bg-img/video.jpg";
import {Link} from "react-router-dom";

const VideoSection = () => {
    return (
        <div className="video-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Video Area Start */}
                        <div className="video-area" style={{backgroundImage: `url(${video})`}}>
                            <div className="video-play-btn">
                                <Link to="https://www.youtube.com/watch?v=f5BBJ4ySgpo" className="video_btn"><i
                                    className="fa fa-play" aria-hidden="true"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;