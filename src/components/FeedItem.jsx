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
   {/* <img src={props.img} className="card-img-top" style ={imgStyle} alt="red"/> */}
   <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p>{props.content}</p>

            
    <button onClick={handleLikeClick}>Like </button>
    <button onClick={handleDislikeClick}>Dislike </button>
            
    {/* <p>Likes: {props.likes}<button onClick={this.handleLikeClick}></button> </p> */}
    {/* <p>Dislikes: {props.dislikes}<button onClick={this.handleDislikeClick}></button> </p>    */}
   </div>
  </div>
 );

}

FeedItem.propTypes = {
 // img: PropTypes.element,
 index: PropTypes.number,
 title: PropTypes.string.isRequired,
 content: PropTypes.string.isRequired,
 count: PropTypes.number,
 likes: PropTypes.number,
 dislikes: PropTypes.number,
 onNewLike: PropTypes.func,
 onNewDislike: PropTypes.func
};
    

export default FeedItem;


