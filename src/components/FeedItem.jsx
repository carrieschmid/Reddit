import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FeedItem(props) {
  const [likesCounter, setLikeCounter] = useState(0);
  const [disLikesCounter, setDisLikeCounter] = useState(0);

  // function handleLikeClick() {
  //   props.onNewLike(props.index);
  // }

  // function handleDislikeClick() {
  //   props.onNewDislike(props.index);
  // }


  return (
    <div className="card" >
      <div className="card-body">
        <p>{props.content}</p>
        <p>Likes: {likesCounter}</p>
        <p>Dislikes: {disLikesCounter}</p>
        <div>
          <button onClick={() => setLikeCounter(likesCounter + 1)}><i>thumb_up</i></button>
          <button onClick={() => setDisLikeCounter(disLikesCounter -1)}><i>thumb_down</i></button>

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
  index: PropTypes.number
};


export default FeedItem;


