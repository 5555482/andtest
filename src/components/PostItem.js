import React from 'react';
import './PostItem.css';

class PostItem extends React.Component {
    render() {
        const post = this.props.post;
        return <li>
            <a className="item post" href={post.url}>{post.title}</a>
        </li>;
    }
}

export default PostItem;