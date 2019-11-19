import React from 'react';
import PropTypes from 'prop-types';

function FeedItem (props)
{
     function handleLikeClick(){
        props.onNewLike(props.count);
      }

      function handleDisLikeClick(){
        props.onNewDisLike(props.count);
      }


    return(
    
        
    <div className="card" style ={cardStyle} >
    {/* <img src={props.img} className="card-img-top" style ={imgStyle} alt="red"/> */}
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p>{props.content}</p>
            <p>Likes: {props.likes}<button onClick={this.handleLikeClick}></button> </p>
            <p>Dislikes: {props.dislikes}<button onClick={this.handleDislikeClick}></button> </p>   
        </div>
    </div>
    );

    }

FeedItem.propTypes = {
    // img: PropTypes.element,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    count: PropTypes.number,
    like: PropTypes.number,
    dislikes: PropTypes.number
};
    

export default FeedItem;