import React from 'react';
import PropTypes from 'prop-types';



function NewPost(props){

    let _post = null;
    
    function onNewPostFormSubmission(event) {
        event.preventDefault();
        props.onAddingNewPostToList({feed: _post.value});
        _post.value = '';
    }
    
    return(
        <div>
            <h1>Make A New Post</h1>
            <form onSubmit={onNewPostFormSubmission}>
                <input type="text"
                id='userName'
                // placeholder='User Name'
                // ref={(input) => {_userNames = input;}}/>
                // <textarea
                // id='post'
                placeholder='What is on your mind?'
                ref={(textarea) => {_post = textarea;}}/>
                <button type='submit'>Submit!</button>

            </form>
        </div>
    );
}

NewPost.propTypes = {
    onAddingNewPostToList: PropTypes.func
};

export default NewPost;