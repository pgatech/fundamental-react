import React, {Component} from "react";
import YouTubeComp from "../../Component/YouTubeComp/YouTubeComp";

const Home = () => {
    return (
        <div>
            <YouTubeComp 
            time="3:32"
            title="Ini adalah video yang mempunyai bagian part 1"
            desc="1932x ditonton 5 hari yang lalu"
            />
            <YouTubeComp 
            time="2:48"
            title="Ini adalah video yang mempunyai bagian part 2"
            desc="1345x ditonton 4 hari yang lalu"
            />
            <YouTubeComp 
            time="6:11"
            title="Ini adalah video yang mempunyai bagian part 3"
            desc="1129x ditonton 3 hari yang lalu"
            />
            <YouTubeComp 
            time="5:67"
            title="Ini adalah video yang mempunyai bagian part 4"
            desc="947x ditonton 2 hari yang lalu"
            />
            <YouTubeComp />
        </div>
    )
}

export default Home;