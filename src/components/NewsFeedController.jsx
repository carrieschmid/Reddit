import React from 'react';
import PropTypes from 'prop-types';
import NewPost from './NewPost';
import NewsFeed from './NewsFeed';
import Counter from './Counter';


function NewsFeedController(props){

 return (
  <div>
    <Counter />
   <NewsFeed
    newsFeedItem ={props.newsFeedItem}
    postList={props.postList} 
    onNewLike={props.onNewLike} 
    onNewDislike={props.onNewDislike}/>
   <NewPost 
    onNewPostCreation={props.onNewPostCreation}/>
  </div>
 );
}

// NewsFeedController.propTypes = {
//  onNewPostCreation: PropTypes.func,
//  postList: PropTypes.array,
//  likes: PropTypes.number,
//  dislikes: PropTypes.number,
//  onNewLike: PropTypes.func,
//  onNewDislike: PropTypes.func,
//  onDeletePost: PropTypes.func
// };

export default NewsFeedController;