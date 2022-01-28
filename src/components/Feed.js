import axios from 'axios'
import React, { Component } from 'react'
// import Posts from './components/Posts'
import './Feed.css'
import NavBar from './NavBar'
import PostList from './PostList'


export default class Feed extends Component {
    
    constructor() {
        super()
    this.state = {
      posts: [],
      
    }
}

    componentDidMount(){
        const userId = localStorage.getItem('id')
        
        axios.get('http://localhost:4000/posts', {params: {userId}}  )
        .then((res) => {
            this.setState({posts: res.data})
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    // handlePosts(){
    //     this.state.posts.map((post) => {
    //         return (
    //             <div key={post.id}>
    //             {/* <img src={post.images} alt='random'/> */}
    //             <p>{post.description}</p>
    //             <h1>{post.tickersymbol}</h1>
    //             <h1>Shares:{post.shares}</h1>
    //             <h1>${post.price}</h1>
    //             </div>
    //         )
    //     })
    // }

    render() {

        return (
            <div>
                <NavBar />
                <div className="mainFeedContainer">
                    <div className='mainFeedInner'>
                        <PostList  posts={this.state.posts}/>
                    </div>
                </div>
            </div>
        )
    }
}
