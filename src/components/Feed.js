import React, { Component } from 'react'
// import Posts from './components/Posts'
import './Feed.css'
import NavBar from './NavBar'
import PostList from './PostList'

export default class Feed extends Component {

    constructor() {
        super()
    this.state = {
      posts: [
        {
         id: 1,
         user_id: 1,
         images: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
         message: "This is a test message",
         symbol: "&#x1F4D6;",
         Win: true,
         Shares: 100,
         risk_amount: 100
        },
        {
         id: 2,
         user_id: 1,
         images: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
         message: "This is a test message",
         symbol: "&#x1F4D6;",
         Win: true,
         Shares: 10,
         risk_amount: 10
        }, 
        {
         id: 3,
         user_id: 1,
         images: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
         message: "This is a test message",
         symbol: "&#x1F4D6;",
         Win: true,
         Shares: 1,
         risk_amount: 1
        },
       ]
    }
}

    handlePosts(){
        this.state.posts.map((post) => {
            return (
                <div key={post.id}>
                <img src={post.images} alt='random'/>
                <p>{post.message}</p>
                </div>
            )
        })
    }

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
