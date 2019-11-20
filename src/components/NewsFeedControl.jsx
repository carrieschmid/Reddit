import React from 'react';
import NewPost from './NewPost';
import NewsFeed from './NewsFeed';
import PropTypes from 'prop-types';


function NewsFeedControl(props) {
 return (
  <div>
   <NewPost onNewPostCreation={props.handleAddingNewPostToList} />
   <hr />
   <NewsFeed newsFeedItem={props.newsFeedItem} />
  </div>
 );
}


NewsFeedController.propTypes = {
    onNewPostCreation: PropTypes.func,
    postList: PropTypes.array,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    onNewLike: PropTypes.func,
    onNewDislike: PropTypes.func
  };

export default NewsFeedControl;