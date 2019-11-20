import React from 'react';
import NewPost from './NewPost';
import NewsFeed from './NewsFeed';
import PropTypes from 'prop-types';


function NewsFeedControl(props) {
 return (
  <div>
   <NewPost onAddingNewPostToList={props.handleAddingNewPostToList} />
   <hr />
   <NewsFeed newsFeedItem={props.newsFeedItem} />
  </div>
 );
}

NewsFeedControl.propTypes = {
   
 handleAddingNewPostToList: PropTypes.func,
 newsFeedList: PropTypes.func
    
};

export default NewsFeedControl;