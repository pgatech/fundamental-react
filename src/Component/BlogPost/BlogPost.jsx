import React, {Component, Fragment} from "react";
import Post from "../Post/Post";
import './BlogPost.css';
import axios from "axios";

// StateFull Component
class BlogPost extends Component {
    state = {
        post: []
    }


    handleRemove = (data) => {
        axios.delete('http://localhost:3004/posts/${data}').then((res)=>{
            console.log(res);
        })
    }

    componentDidMount(){

        //Pemanggilan API GET default
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json 
        //     })
        // })
        axios.get('http://localhost:3004/posts')
        .then((result)=> {
            console.log(result.data);
            this.setState ({
                post: result.data
            })
        })
    }

    render () {
        return (

            // Parent Jangan Lebih Dari 1
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return (
                            // Props Key Title Desc
                            <Post key={post.id} data={post} remove={this.handleRemove}/>
                        )
                    })
                }
                
            </Fragment>
        )
    }
}

export default BlogPost;