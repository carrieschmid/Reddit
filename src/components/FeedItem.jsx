import React from 'react';
import PropTypes from 'prop-types';

function FeedItem(props){
    var imgStyle = {
        height: '50px',
        width: '250px'
           
       };
      
       var cardStyle = {
        height: '450px',
        width: '250px',
        marginRight: '40px',
        marginTop:'15px'
       };

    return(
    
        
    <div className="card" style ={cardStyle} >
    <img src={props.img} className="card-img-top" style ={imgStyle} alt="red"/>
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
   
    </div>
    <ul className="list-group list-group-flush">
    {/* <li className="list-group-item">Up Vote: {props.upVote}</li> */}
    <button type="button" class="btn btn-secondary" onclick="myFunction(var newPintsLeft)">Up Vote</button>

    {/* <li className="list-group-item">DownVote: {props.downVote}</li> */}
    <button type="button" class="btn btn-secondary" onclick="myFunction(var newPintsLeft)">Down Vote</button>
    </ul>
    <div className="card-body">
  
   
   </div>
  </div>
    );
}

FeedItem.propTypes = {
    img: PropTypes.element,
    title: PropTypes.string.isRequired,
    feed: PropTypes.string.isRequired
};

export default FeedItem;