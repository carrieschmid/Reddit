import React from 'react';
import NewPost from './NewPost';
import PropTypes from 'prop-types';

class NewsFeed extends React.Component 
{
    constructor(props) {
        super(props);
        //super accesses the React.Component constructor
        this.state = {
          //all state value key-value pairs go here
          newsFeedList: [
            {
                
                count: 0,
              userName: "name1",
              feed: 'feed1'
            }
          ],
          currentSearchTerm: "",
        };

        render(){
        return (
            <div>
                <hr />
                {props.newsFeedList.map((post, index) =>
                    <NewsFeed title={post.title}
                        feed={post.feed}
                        key={index} />
                )}
            </div>
        );

        
       
       
export default NewsFeed;