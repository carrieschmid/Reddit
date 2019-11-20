import React from 'react';
import FeedItem from './FeedItem';
import PropTypes from 'prop-types';


function NewsFeed (props) 
{

 return (
  <div>
   <hr />
   {props.newsFeedItem.map((post, i) =>
    <FeedItem 
     content={post.content}
     like = {post.like} 
     dislike = {post.dislike}
     onNewLike={props.onNewLike}
     onNewDislike={props.onNewDislike}
     //this is passed into the function in App.jsx 
     key={post.id}
    index={i}
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
//  index: PropTypes.number
};
       
export default NewsFeed;