import React from 'react';
import FeedItem from './FeedItem';
import PropTypes from 'prop-types';

function NewsFeed (props) 
{

    return (
        <div>
            <hr />
            {props.newsFeedList.map((post, index) =>
                <FeedItem title={post.title}
                    content={post.content}
                    count = {post.count}
                    like = {post.like} 
                    dislike = {post.dislike} 
                    key={index} />
            )}
        </div>
    );
}

        
       
    NewsFeed.propTypes = {
        newsFeedList: PropTypes.array
    };
       
export default NewsFeed;