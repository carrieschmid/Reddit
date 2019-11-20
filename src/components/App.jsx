import React from 'react';
import DiscussionBoard from './DiscussionBoard';
// import Error404 from './Error404';
// import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   newsFeedItem: [],
  };
    
  
  this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  this.handleLikes = this.handleLikes.bind(this);
  this.handleDislikes =this.handleDislikes.bind(this);
    
    
 }
  
 handleAddingNewPost (newPost) {
  var newNewsFeedItem = this.state.newsFeedItem.slice();
  newNewsFeedItem.push(newPost);
  this.setState({ newsFeedItem: newNewsFeedItem });
 }
    
 handleLikes(){
  var copyMList = this.state.masterPostList;
  copyMList.likes = copyMList.likes + 1; 
  this.setState({masterPostList: copyMList});
 }
 handleDislikes(){
  var copyMList = this.state.masterPostList;
  copyMList.dislikes = copyMList.dislikes + 1; 
  this.setState({masterPostList: copyMList});
 }

  
 render() {
  return (
   <div className="App container">
    {/* <div className="row" >
     <NavBar handleAddingNewSearchTerm={this.handleAddingNewSearchTerm}/>
    </div> */}
  
    <div className="row">
     <div className="col-md-4">
      <DiscussionBoard 
       newsFeedItem={this.state.newsFeedItem} 
       handleAddingNewFeedItem={this.handleAddingNewFeedItem}
       onNewLike={this.handleLikes}
       onNewDislike={this.handleDislikes}/>
     </div>
  

    </div>
   </div>
  );
 }



}
export default App;