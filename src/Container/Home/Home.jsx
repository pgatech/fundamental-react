import React, {Component} from "react";
import YouTubeComp from "../../Component/YouTubeComp/YouTubeComp";

const Home = () => {
    return (
        <div>
            <YouTubeComp 
            time="3:32"
            />
            <YouTubeComp 
            time="2:48"
            />
            <YouTubeComp 
            time="6:11"
            />
            <YouTubeComp 
            time="5:67"
            />
            <YouTubeComp />
        </div>
    )
}

export default Home;