import React from 'react';

function PostList({posts}) {
  return <div>{
    posts.map((post) => {
        return (
            <div className="postContentMainBackground" key={post.id}>
          <div className='postContentBackground'>
            <img src={post.myimages} style={{height: '200', width: '250px'}} alt='random'/>
            <p>{post.description}</p>
            <h1>{post.tickersymbol}</h1>
            <h1>Shares:{post.shares}</h1>
            <h1>${post.price}</h1>
            </div>
          </div>
        )
    })
  }
  </div>;
}

export default PostList;
