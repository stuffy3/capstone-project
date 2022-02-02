import React from 'react';

function PostList({posts}) {
  return <div>{
    posts.map((post) => {
        return (
            <div className="postContentMainBackground" key={post.id}>
              <div className='postContentBackground'>
                <div className="postContentTop">
                  <h1 className="postTickerSymbol">{post.tickersymbol.toUpperCase()}</h1>
                  <hr className="postTopDivider" color={404040}/>
                </div>
                <div className="postData">
                  <h3 className="postText">Shares Bought: {post.shares}</h3>
                  <h3 className="postText">Buy Price: ${post.price}</h3>
                  <h3 className="postText">Sell Price: ${post.sellprice}</h3>
                  <h3 className="postText">Risk Amount: ${post.riskamount}</h3>
                </div>
                <div className="postImageContainer">
                  <img className="postImages" src={post.myimages} alt='random'/>
                </div>
                  <p className="postDescription">{post.description}</p>
                </div>
          </div>
        )
    })
  }
  </div>;
}

export default PostList;
