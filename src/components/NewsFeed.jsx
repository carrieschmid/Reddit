import React from 'react';
import FeedItem from './FeedItem';
import PropTypes from 'prop-types';


function NewsFeed (props) 
{

 return (
  <div>
   <hr />
   {props.newsFeedItem.map((post, index) =>
    <FeedItem title={post.title}
     content={post.content}
     count = {post.count}
     like = {post.like} 
     dislike = {post.dislike} 
     key={index}
     //  index={i}
     onNewLike={props.onNewLike}
     onNewDislike={props.onNewDislike}
     //this is passed into the function in App.jsx
    />
     
   )}
  </div>
 );
}

        
       
NewsFeed.propTypes = {
 newsFeedItem: PropTypes.array,
 likes: PropTypes.number,
 dislikes: PropTypes.number,
 onNewLike: PropTypes.func,
 onNewDislike: PropTypes.func,
 index: PropTypes.number
};
       
export default NewsFeed;