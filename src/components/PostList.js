import React from 'react';

function PostList({posts}) {
  return <div>{
    posts.map((post) => {
        return (
            <div className="postContentMainBackground" key={post.id}>
              <div className='postContentBackground'>
                <div className="postContentTop">
                  <h1 className="postTickerSymbol">{post.tickersymbol.toUpperCase()}</h1>
                  <h2 className="postText">Shares Bought: {post.shares}</h2>
                  <h2 className="postText">Price of Purchase: ${post.price}</h2>
                  <div>
                    <img className="postImages" src={post.myimages} style={{height: '350', width: '350px'}} alt='random'/>
                    <p className="postDescription">{post.description}</p>
                  </div>
                </div>
              </div>
          </div>
        )
    })
  }
  </div>;
}

export default PostList;
