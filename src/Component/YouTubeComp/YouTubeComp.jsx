import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">Title Here</p>
            <p className="desc">Description Here</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: "1:33"
}

export default YouTubeComp;