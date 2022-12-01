import React, {Component, Fragment} from "react";
import Post from "../Post/Post";
import './BlogPost.css';
import axios from "axios";

// StateFull Component
class BlogPost extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((result)=> {
            console.log(result.data);
            this.setState ({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI()
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
       this.getPostAPI();
    }

    render () {
        return (

            // Parent Jangan Lebih Dari 1
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title"/>
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="body-content" id="body-content" cols="30" rows="10" placeholder="add blog content"></textarea>
                    <button className="btn-submit">Simpan</button>
                
                </div>
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