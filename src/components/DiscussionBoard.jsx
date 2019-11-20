import React from 'react';
import PropTypes from 'prop-types';
import NewPost from './NewPost';
import NewsFeed from './NewsFeed';


function DiscussionBoard(props){

 return (
  <div>
   <NewsFeed
    newsFeedItem ={props.newsFeedItem}
    postList={props.postList} 
    onNewLike={props.onNewLike} 
    onNewDislike={props.onNewDislike}
    onDeletePost={props.onDeletePost}/>
   <NewPost 
    onNewPostCreation={props.onNewPostCreation}/>
  </div>
 );
}

DiscussionBoard.propTypes = {
 onNewPostCreation: PropTypes.func,
 postList: PropTypes.array,
 likes: PropTypes.number,
 dislikes: PropTypes.number,
 onNewLike: PropTypes.func,
 onNewDislike: PropTypes.func,
 onDeletePost: PropTypes.func
};

export default DiscussionBoard;