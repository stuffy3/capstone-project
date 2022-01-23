import React from 'react';

function PostList({posts}) {
  return <div>{
    posts.map((post) => {
        return (
            <div key={post.id}>
            <img src={post.images} style={{height: "200px", width: "200px"}} alt='random'/>
            <p>{post.message}</p>
            </div>
        )
    })
    }
  </div>;
}

export default PostList;
