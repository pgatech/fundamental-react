import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
    return (
            <div className="youtube-wrapper">
                <div className="img-thumb">
                    <img src="https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
    )
}

YouTubeComp.defaultProps = {
    time: '1:33',
    title: 'Ini adalah video yang mempunya bagian part 0',
    desc: '0x ditonton 1 menit yang lalu'
}

export default YouTubeComp;