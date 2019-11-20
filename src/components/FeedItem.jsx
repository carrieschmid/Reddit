import React from 'react';
import PropTypes from 'prop-types';

function FeedItem (props)
{
 function handleLikeClick(){
  props.onNewLike(props.index);
 }

 function handleDislikeClick(){
  props.onNewDislike(props.index);
 }


 return(     
  <div className="card" >
   <div className="card-body">
    <p>{props.content}</p>
    <p>Likes: {props.likes}</p>
    <p>Dislikes: {props.dislikes}</p>         
    <div>
            <button onClick={handleLikeClick}><i>thumb_up</i></button>
            <button onClick={handleDislikeClick}><i>thumb_down</i></button>
            
          </div>
   </div>
  </div>
 );

}

FeedItem.propTypes = {
 content: PropTypes.string.isRequired,
 likes: PropTypes.number,
 dislikes: PropTypes.number,
 onNewLike: PropTypes.func,
 onNewDislike: PropTypes.func,
 index:PropTypes.number
};
    

export default FeedItem;


