import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import Posts from './components/Posts'
import './Feed.css'
import NavBar from './NavBar'
import PostList from './PostList'
import Profile from './Profile'

export default class Feed extends Component {
    
    constructor() {
        super()
    this.state = {
      posts: [],
      isLoading: false,
      response: false,
      error: null
    }
}

    componentDidMount(){
        const userId = localStorage.getItem('id')
        this.setState({isLoading: true})
        axios.get('http://localhost:4000/posts', {params: {userId}}  )
        .then((res) => {
            this.setState({posts: res.data, isLoading: false, response: true})
            if(res.data.length < 0) {
                this.setState({noPosts: false})
            }
        })
        .catch(err => this.setState({isLoading: false, response: true, error: err.message}))
    }
    
    render() {
        return (
            <div>
                <NavBar />
                {this.state.isLoading && <div style={{height: "94.7vh", color: "white"}}><h2>Loading...</h2></div>}
                {this.state.response && this.state.posts.length > 0 ?
                <div className="mainFeedContainer">
                    <div className='mainFeedInner'>
                        <PostList  posts={this.state.posts}/>
                        <Profile posts={this.state.posts} />
                    </div>
                </div>
                : null}{this.state.response && this.state.posts.length === 0 ?
                <div style={{height: "92.5vh", color: "white"}}>
                <h2>No Entries? Click </h2><Link to="create-post">Getting Started</Link>
            </div> : null}
            </div>
        )
    }
}
