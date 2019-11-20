import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';



function NewPost(props){

 let _content = null;
 let _likes = 0;
 let _dislikes = 0; 
    
 function onNewPostFormSubmission(event) {
  event.preventDefault();
  props.onNewPostCreation({content: _content.value, likes: _likes, dislikes: _dislikes, id: v4()});
  _content.value = '';
 }
    
 return(
  <div>
   <h1>Make A New Post</h1>
   <form onSubmit={onNewPostFormSubmission}>
    <input type="text"
     id='content'
     placeholder='Write your post here'
     className='materialize-textarea'
     ref={(textarea) => {_content = textarea;}}/>
    <button type='submit'>Submit!</button>

   </form>
  </div>
 );
}

NewPost.propTypes = {
 onNewPostCreation: PropTypes.func
};

export default NewPost;