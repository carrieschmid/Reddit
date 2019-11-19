import React from 'react';
import NewPost from './NewPost';
import PropTypes from 'prop-types';

function NewsFeed(props) {
    return (
        <div>
            <hr />
            {props.newsFeedList.map((post, index) =>
                <NewPost userName={post.userName}
                    feed={post.feed}
                    key={index} />
            )}
        </div>
    );
}

NewsFeed.propTypes = {
    newsFeedList: PropTypes.array
};

export default NewsFeed;